import fs from "node:fs";

const json = JSON.parse(fs.readFileSync("data.json", "utf-8"));
fs.mkdirSync("Generated", { recursive: true });
fs.writeFileSync("./Generated/data.html", `
	<!DOCTYPE html>
	<head>
		<title>${json.header}</title>
	</head>
	<body>
		<h1>${json.header}</h1>
		<p><i>${json.italic}</i></p>
	</body>
`, "utf-8");