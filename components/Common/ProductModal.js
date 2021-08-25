import React, { useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";

const ProductsModal = ({ show, handleClose, modalHeader }) => {
    useEffect(() => {
        modalBodyMaker();
    }, [modalHeader]);

    const modalBodyMaker = () => {
        switch (modalHeader) {
            case "Pipes":
                return (
                    <Table>
                        <Thead>
                            <Tr>
                                <Th>Product Type</Th>
                                <Th>Size (Ranges) </Th>
                                <Th>Material Standard/Grades</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>
                                    <p>CarBon Steel-line Pipes Seamless/Welded</p>
                                    <p>(PSl1/2)</p>
                                    <p>(PSl1/2)</p>
                                </Td>
                                <Td>
                                    <p>1/2” - 24” Seamless</p>
                                    <p>1” - 24” erW</p>
                                    <p>
                                        24” - 120” SaW (longitudinal or Spiral as per customer’s
                                        requirement)
                                    </p>
                                </Td>
                                <Td>
                                    <p>aPi5l gr B, X42, X52, X56, X60, X70, X80</p>
                                    <p>aPi5l gr B, X42, X52, X56, X60, X70, X80</p>
                                    <p>aPi5l gr B, X42, X52, X56, X60, X70, X80</p>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td><p>CarBon Steel-Process Pipes Seamless/Welded</p></Td>
                                <Td>
                                    <p>1/2” - 24” Seamless 1” -</p>
                                    <p>24” erW 24” - 120” eFW</p>
                                </Td>
                                <Td>
                                    <p>aStM a106 gr B/C, aStM a53 gr B,</p>
                                    <p>aStM a672 gr C60/C65/C70-Cl 12,22,32,42</p>
                                </Td>
                            </Tr>

                            <Tr>
                                <Td><p>CarBon Steel-low temperature</p></Td>
                                <Td>
                                    <p>1/4” - 24” Seamless</p>
                                    <p>24” - 120” eFW</p>
                                </Td>
                                <Td>
                                    <p>aStM a333 gr 6</p>
                                    <p>aStM a671 gr CC60 /CC65/CC70,</p>
                                    <p>Cl 12, 22,32,42</p>
                                </Td>
                            </Tr>

                            <Tr>
                                <Td><p>CarBon Steel-Ferritic alloys</p></Td>
                                <Td>
                                    <p>1/2” - 24” Seamless</p>
                                    <p>24” - 120” eFW</p>
                                </Td>
                                <Td>
                                    <p>aStM a335 gr P1/P5/P9/P11/P12/P22/P91/P92</p>
                                    <p>aStM a691 1Cr/3Cr/5Cr/9Cr/11Cr/12Cr/</p>
                                    <p>22Cr/9 1Cr/92Cr Cl - 22 / 32 / 42</p>
                                </Td>
                            </Tr>

                            <Tr>
                                <Td><p>austentic StainleSS Steel</p></Td>
                                <Td>
                                    <p>1/2” - 16” Seamless</p>
                                    <p>1” - 66” eFW</p>
                                </Td>
                                <Td>
                                    <p>atSM a312 gr 304/304l, 316/316l, 321, 347, 904/904l</p>
                                    <p>aStM a358 gr 304/304l ,316/316l, 321 , 347, 904/904l</p>
                                </Td>
                            </Tr>

                            <Tr>
                                <Td><p>duPleX /SuPer duPleX StainleSS Steel</p></Td>
                                <Td>
                                    <p>1/2”-8” (Seamless) 8”-24”(Welded)</p>
                                </Td>
                                <Td>
                                    <p>aStM a790 /aStM a928</p>
                                </Td>
                            </Tr>

                            <Tr>
                                <Td><p>HigH alloyS</p>
                                    <p>(nickel and its alloys, Copper Based alloys & titanium)</p>
                                </Td>
                                <Td>
                                    <p>1/2”-8” (Seamless) 8”-24”(Welded)</p>
                                </Td>
                                <Td>
                                    <p>aStM “B” Series</p>
                                </Td>
                            </Tr>

                        </Tbody>
                    </Table>
                );

                break;
            case "Flanges":
                return (
                    <Table>
                        <Thead>
                            <Tr>
                                <Th>Product Type</Th>
                                <Th>Size (Ranges) </Th>
                                <Th>Material Standard/Grades</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>
                                    <p>CARBON STEEL-High temp/Low temp</p>

                                </Td>
                                <Td>
                                    <p>1/2” - 60” A</p>
                                </Td>
                                <Td>
                                    <p>ASTM A105/A350 LF2/LF6</p>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td><p>Austenetic & Duplex Stainless Steel</p></Td>
                                <Td>
                                    <p>1/2” -48” A</p>
                                </Td>
                                <Td>
                                    <p>ASTM A182 F304/304L, F316/316L, F321/ F347, F304H, F316H/F51/F53/F55</p>
                                </Td>
                            </Tr>

                            <Tr>
                                <Td><p>ALLOY STEELS</p></Td>
                                <Td>
                                    <p>Upto-20”</p>
                                </Td>
                                <Td>
                                    <p>Low Alloys in Gr. F1/F9/F11/F91/F92</p>
                                    <p>Nickle Based Alloys</p>
                                    <p>Copper Based Alloys</p>
                                </Td>
                            </Tr>

                        </Tbody>
                    </Table>
                );

                break;
            case "Wrought & Forged Steel Fittings":
                return (
                    <Table>
                        <Thead>
                            <Tr>
                                <Th>Product Type</Th>
                                <Th>Size (Ranges) </Th>
                                <Th>Material Standard/Grades</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>
                                    <p>CS-Forged/Reinforced Fittings CS-Wrought-BW</p>

                                </Td>
                                <Td>
                                    <p>1/4”-6” (Forged)</p>
                                    <p>1/2”-24” (Seamless)</p>
                                    <p>26”-120” (Welded)</p>
                                </Td>
                                <Td>
                                    <p>ASTM A105, A350 LF2,LF6, A182, F52, F9,F11, F22/F91/F92</p>
                                    <p>ASTM A234 WPB/WPC, A420 WPL6 A860/MSS</p>
                                    <p>SP75--WPHY 42 WPHY 46 WPHY 52 WPHY</p>
                                    <p>60 WPHY 65 WPHY 70 (WROUGHT FITTINGS)</p>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td><p>Stainless Steel-Forged</p></Td>
                                <Td>
                                    <p>1/4”-6”</p>
                                </Td>
                                <Td>
                                    <p>ASTM A182 F304/304L, 316/316L, 904/904L</p>
                                </Td>
                            </Tr>

                            <Tr>
                                <Td><p>Stainless Steel-Wrought-BW</p></Td>
                                <Td>
                                    <p>Upto-60” A</p>
                                </Td>
                                <Td>
                                    <p>ASTM A403 GR-304/304L, 316/316L, 321/321H & 904/904L.</p>
                                </Td>
                            </Tr>

                            <Tr>
                                <Td><p>Alloys/CS/SS/DSS/SDSS-High Temp/Low temp U</p></Td>
                                <Td>
                                    <p>Upto-60”</p>
                                </Td>
                                <Td>
                                    <p>ASTM A420 WP1, WP5, WP9, WP11, WP22,</p>
                                    <p>WP91, WP92 (Low Alloys), UNS 31803,</p>
                                    <p>32750, 250 SMO, UNS N88020,</p>
                                    <p>UNS N6625, UNS N8825)</p>
                                </Td>
                            </Tr>


                        </Tbody>
                    </Table>
                );

                break;
            case "Valves":
                return (
                    <Table>
                        <Thead>
                            <Tr>
                                <Th>Product Type</Th>
                                <Th>Size (Ranges) </Th>
                                <Th>Material Standard/Grades</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>
                                    <p>CS-Forged ( CL 800 to 1500 )</p>

                                </Td>
                                <Td>
                                    <p>Upto-2” A</p>

                                </Td>
                                <Td>
                                    <p>ASTM A105/A350 LF2/LF6, A182, GR 316/316L/304/304L</p>

                                </Td>
                            </Tr>
                            <Tr>
                                <Td><p>CS-Casting ( CL 150 to 900 )	</p></Td>
                                <Td>
                                    <p>Upto-60”</p>
                                </Td>
                                <Td>
                                    <p>ASTM A216WCB/A351 CF3/CF3M/CF8/CF8M</p>
                                </Td>
                            </Tr>

                            <Tr>
                                <Td><p>Others, Cast & Forged</p></Td>
                                <Td>
                                    <p>Upto-60” (Cast)</p>
                                    <p>Upto-2” (Forged)</p>
                                </Td>
                                <Td>
                                    <p>Various combinations of Body, Material & Trim</p>
                                    <p>Various combinations of Body, Material & Trim</p>
                                </Td>
                            </Tr>

                        </Tbody>
                    </Table>
                );

                break;

            case "Stud Bolts":
                return (
                    <Table>
                        <Thead>
                            <Tr>
                                <Th>Product Type</Th>
                                <Th>Size (Ranges) </Th>
                                <Th>Material Standard/Grades</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>
                                    <p>CS-High temp CS Low temp	</p>

                                </Td>
                                <Td>
                                    <p>1/8” - 3”</p>

                                </Td>
                                <Td>
                                    <p>Bolts ASTM A193 B7/B7M A320 L7/L7M Nuts - ASTM A194 2H/2HM</p>

                                </Td>
                            </Tr>
                            <Tr>
                                <Td><p>Other Required grades not listed above</p></Td>
                                <Td>

                                </Td>
                                <Td>
                                    <p>Can be arranged within shortest possible time</p>
                                </Td>
                            </Tr>

                        </Tbody>
                    </Table>
                );

                break;
            default:
                break;
        }
    };
    return (
        <Modal
            show={show}
            onHide={handleClose}
            size="lg"
            aria-labelledby="contained-modal-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    <h1> {modalHeader} </h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>{modalBodyMaker()}</Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ProductsModal;
