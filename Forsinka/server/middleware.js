import compression from "compression";
import cors from "cors";

function Middleware() {
    return [
        cors({
            origin: "https://forsinka.chillcraft.co",
            credentials: true,
        }),
        compression(),
    ];
}

export default Middleware