 
 1. nock intercept

	var example = nock("http://host:port")
			.get("subhost")
			.reply("something you can modify").
