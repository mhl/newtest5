import update from "./update";

import { layout } from "../init";

export default function() {
	var primary = layout.getSection("primary");
	var h1 = document.createElement("h1");
	primary.appendChild(h1);
	update();
}
