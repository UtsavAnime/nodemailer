const mail = require("nodemailer");
require("dotenv").config();

const main = async () => {
	let testAccount = await mail.createTestAccount();



	let transporter = mail.createTransport({
		service: process.env.service,
		host: process.env.host,
		auth:{
            user: "utsav@openxcell.com",
            pass: process.env.pass
        }
	})
	let info = await transporter.sendMail({
		from: '"Ghost... 👻" <utsav@openxcell.com>',
		to: process.env.to,
        // [
		// 	"utsav@openxcell.com",
		// 	"vipul@openxcell.com",
		// 	"ayush@openxcell.com",
		// 	"darshil.dhandh@openxcell.info",
		// 	"sharuti.kumari@openxcell.com",
		// ],
		subject: "I see you.... o.o",
		text: "We are watching.... o.o",
		//html: "<b>We are always watching.... o.o</b>",
		html: 'Embedded image: <img src="cid:fantasy-2847724_960_720"/>',
		attachments: [
			{
				//filename: 'image.png',
				path: "https://cdn.pixabay.com/photo/2017/10/13/14/15/fantasy-2847724_960_720.jpg",
				cid: "fantasy-2847724_960_720", //same cid value as in the html img src
			},
		],
	});

	console.log("Message sent: %s", info.messageId);

};

main().catch(console.error);
