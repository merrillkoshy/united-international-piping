import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-component";
import InfiniteScroll from "react-infinite-scroll-component";
import { Modal, Button } from "react-bootstrap";
import PageBanner from "@/components/Common/PageBanner";
import Lightbox from "react-image-lightbox";

const masonryOptions = {
	fitWidth: false,
	columnWidth: 300,
	gutter: 30,
	itemSelector: ".photo-item",
};

const Gallery = () => {
	const [imageArray, setImageArray] = useState([]);
	const [imageModal, setImageModal] = useState({
		showModal: false,
		modalSrc: null,
		imageIndex: null,
		currentSectionLength: null,
	});
	const [photoIndex, setPhotoIndex] = useState(0);
	const [isOpenImage, setIsOpenImage] = useState(false);

	const refresh = () => {
		console.log("refresh.....");
	};

	const onSet = (type) => {
		if (type == "prev") {
			if (imageModal.imageIndex != 0) {
				let data = imageArray[imageModal.imageIndex - 1];

				setImageModal((modal) => ({
					...modal,
					imageIndex: imageModal.imageIndex - 1,
					modalSrc: data,
				}));
			} else {
				setImageModal((modal) => ({
					...modal,
					imageIndex: imageArray.length - 1,
					modalSrc: imageArray[imageArray.length - 1],
				}));
			}
		} else if (type == "next") {
			if (imageModal.imageIndex == imageArray.length - 1) {
				setImageModal((modal) => ({
					...modal,
					imageIndex: 0,
					modalSrc: imageArray[0],
				}));
			} else {
				let data = imageArray[imageModal.imageIndex + 1];

				setImageModal((modal) => ({
					...modal,
					imageIndex: imageModal.imageIndex + 1,
					modalSrc: data,
				}));
			}
		}
	};

	const childElements = () => {
		const material = "/images/gallery/ups-materials_";
		const office = "/images/gallery/ups-office_";
		for (let index = 0; index < 102; index++) {
			setImageArray((prev) => [material + index + ".jpg", ...prev]);
		}
		for (let index = 0; index < 8; index++) {
			setImageArray((prev) => [office + index + ".jpg", ...prev]);
		}

		return imageArray;
	};
	useEffect(() => {
		childElements();
		return () => {
			setImageArray([]);
		};
	}, []);
	return (
		<>
			<PageBanner pageTitle="Gallery" />

			<InfiniteScroll
				dataLength={imageArray?.length}
				// next={fetchData}
				hasMore={false}
				loader={<h4>Loading...</h4>}
				endMessage={
					<p style={{ textAlign: "center" }}>
						<b>United Piping Solutions</b>
					</p>
				}
				refreshFunction={refresh}
				pullDownToRefresh
				pullDownToRefreshThreshold={50}
				pullDownToRefreshContent={
					<h3 style={{ textAlign: "center" }}>&#8595; Pull down to refresh</h3>
				}
				releaseToRefreshContent={
					<h3 style={{ textAlign: "center" }}>&#8593; Release to refresh</h3>
				}
			>
				<div className="d-flex align-items-center justify-content-center">
					<div className="container p-5">
						<div className="section-title">
							<h2>On Camera</h2>
							<div className="bar"></div>
							<p>Here are some great shots from UPS!</p>
						</div>

						<Masonry
							className={"photo-list"} // default ''
							elementType={"ul"} // default 'div'
							options={masonryOptions} // default {}
							disableImagesLoaded={false} // default false
							updateOnEachImageLoad={true} // default false and works only if disableImagesLoaded is false
						>
							{imageArray &&
								imageArray?.map((ims, idx) => {
									return (
										<li className={`photo-item`} key={idx}>
											<img
												loading="lazy"
												src={`${ims}`}
												onClick={() => {
													setIsOpenImage(true);
													setPhotoIndex(idx);
												}}
											/>
										</li>
									);
								})}
						</Masonry>
					</div>
				</div>
			</InfiniteScroll>

			{isOpenImage && (
				<Lightbox
					reactModalStyle={{
						zIndex: 2000,
					}}
					mainSrc={imageArray[photoIndex]}
					nextSrc={imageArray[(photoIndex + 1) % imageArray.length]}
					prevSrc={
						imageArray[(photoIndex + imageArray.length - 1) % imageArray.length]
					}
					onCloseRequest={() => setIsOpenImage(false)}
					onMovePrevRequest={() =>
						setPhotoIndex(
							(photoIndex + imageArray.length - 1) % imageArray.length
						)
					}
					onMoveNextRequest={() =>
						setPhotoIndex((photoIndex + 1) % imageArray.length)
					}
				/>
			)}
		</>
	);
};
export default Gallery;
