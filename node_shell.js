const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'4f6611a5-547f-4332-82d2-3a7e990fc417'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
