import { Fab, Action } from "react-tiny-fab";
import * as Icon from "react-feather";
import { useRouter } from "next/router";

const FAB = () => {
    const router = useRouter();
    const mainButtonStyles = {
        position: "relative",
        bottom: "0",
        right: "3vw",
        zIndex: "5",
        backgroundColor: "#EC4135",
    };
    const actionButtonStyles = {
        backgroundColor: "#1C3F94",
    };
    return (
        <Fab
            mainButtonStyles={mainButtonStyles}
            icon={<Icon.Download />}
            alwaysShowTitle={true}
            event={"hover"}
        >
            <Action
                style={actionButtonStyles}
                text="Technical Data"
                onClick={() => router.push("/download/technical-data.pdf")}
            >
                <Icon.FileText />
            </Action>
            <Action
                style={actionButtonStyles}
                text="Weights & Dimensions"
                onClick={() => router.push("/download/weights-and-dimensions.pdf")}
            >
                <Icon.Trello />
            </Action>
        </Fab>
    );
};

export default FAB;
