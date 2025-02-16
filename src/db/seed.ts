import { db } from ".";
import {
	EventStatusSchema,
	events as eventsTable,
	type insertEvent,
} from "./schemas/events";

export const insertEvents = async ({ events }: { events: insertEvent[] }) => {
	await db.insert(eventsTable).values([...events]);
};

const sampleUserId = "9cebcb55-7b7c-4280-80f0-6f261c038bc1";

const sampleEvents: insertEvent[] = [
	{
		userId: sampleUserId,
		title: "朝礼時に把握漏れを上司に指摘された",
		background:
			"自分・社長・上司3名計5名での朝礼・納期などは近いわけではないいつも通りの朝礼での出来事",
		description:
			"朝礼の際に上司の説明に対して、それは今月末までの納品ですよね？と聞いたところ、それは今言ってたけど来月の10日っていうことだよと指摘された。",
		occurredAt: new Date("2025-02-16 10:00:00"),
		emotion:
			"みんなは理解できていたっぽいのに自分だけ理解できておらず、的外れな質問をしたようで悔しい",
		status: EventStatusSchema.Enum.pending,
	},
	{
		userId: sampleUserId,
		title: "プロジェクト進捗の共有時にミスを指摘された",
		background: "月初にチームメンバーで進捗報告を共有する定例会議の場面",
		description:
			"進捗報告中に、自分が言った売上達成率は85%だと発表したところ、上司からそれは80%だと指摘され、訂正した。",
		occurredAt: new Date("2025-02-15 14:30:00"),
		emotion: "上司に指摘されて少し焦ったが、すぐに訂正できてホッとした",
		status: EventStatusSchema.Enum.pending,
	},
	{
		userId: sampleUserId,
		title: "クライアントからのフィードバックに困惑",
		background: "クライアントとの定例ミーティングでのやり取り",
		description:
			"フィードバックをもらう際、クライアントが言った内容が曖昧で、具体的な改善点を示して欲しいという要望にどう答えすべきか迷った。",
		occurredAt: new Date("2025-02-14 11:45:00"),
		emotion:
			"クライアントの意図を汲み取れなかった自分にイライラしたが、後で他のメンバーと確認して解決できた。",
		status: EventStatusSchema.Enum.pending,
	},
	{
		userId: sampleUserId,
		title: "会議後に資料を送るのを忘れていた",
		background:
			"プロジェクト会議終了後に必要な資料を送ることになっていたが、気づいたら送信していなかった",
		description:
			"会議後、同僚から資料を送っていないことを指摘され、慌てて送信した。",
		occurredAt: new Date("2025-02-13 16:00:00"),
		emotion: "すぐに対応したものの、送るタイミングを逃してしまい少し焦った",
		status: EventStatusSchema.Enum.pending,
	},
	{
		userId: sampleUserId,
		title: "新しいツールを使う際に操作ミスをした",
		background: "新しいツール導入後、初めて使用した時のこと",
		description:
			"ツールの操作中に、誤って保存ボタンを連打してしまい、設定がリセットされてしまった。",
		occurredAt: new Date("2025-02-12 09:15:00"),
		emotion: "最初は驚き、焦ったが、すぐにサポートチームに問い合わせて解決した",
		status: EventStatusSchema.Enum.pending,
	},
	{
		userId: sampleUserId,
		title: "上司からの急な仕事依頼に追われた",
		background: "突然、上司からの依頼があり、急いで対応する必要が出てきた",
		description:
			"上司から「これを今日中にやってほしい」と頼まれ、急いで取り掛かった。内容は急遽修正された契約書の確認だった。",
		occurredAt: new Date("2025-02-11 18:30:00"),
		emotion: "予想外の依頼で焦ったが、無事に終わらせて達成感があった",
		status: EventStatusSchema.Enum.pending,
	},
	{
		userId: sampleUserId,
		title: "メールの返信が遅れてしまった",
		background: "重要なメールを受け取ったが、返信を後回しにしていた",
		description: "翌日になって気づき、慌てて返信したが、少し気まずく感じた。",
		occurredAt: new Date("2025-02-10 15:00:00"),
		emotion: "返信が遅れたことを反省し、次回からは迅速に返信しようと決めた",
		status: EventStatusSchema.Enum.pending,
	},
	{
		userId: sampleUserId,
		title: "チームメンバーの提案を無視してしまった",
		background: "プロジェクトのアイデア会議でのこと",
		description:
			"メンバーの提案に耳を傾けず、自分の意見ばかりを強く主張した。具体的には新しいデザイン案を提案されたが、それを無視して自分の案を押し通した。",
		occurredAt: new Date("2025-02-09 13:00:00"),
		emotion: "後で反省して、自分の態度を改める必要があると感じた",
		status: EventStatusSchema.Enum.pending,
	},
	{
		userId: sampleUserId,
		title: "プレゼン資料を間違えて送信してしまった",
		background: "大事なプレゼンテーションの資料を担当者に送る際",
		description:
			"誤って、初期段階のドラフト資料を送信してしまい、急いで訂正した。",
		occurredAt: new Date("2025-02-08 17:45:00"),
		emotion:
			"送信後すぐに気づき、焦って訂正したが、相手にも迷惑をかけてしまい反省した",
		status: EventStatusSchema.Enum.pending,
	},
	{
		userId: sampleUserId,
		title: "同僚のアイデアを盗んだと思われた",
		background: "新しいプロジェクトのアイデアを共有する際",
		description:
			"自分が提案したアイデアが、実は同僚が以前に言っていたものだったと気づき、気まずい雰囲気になった。",
		occurredAt: new Date("2025-02-07 10:30:00"),
		emotion: "その後同僚に謝罪し、誤解を解けたので安心した",
		status: EventStatusSchema.Enum.pending,
	},
];

const main = async () => {
	await insertEvents({ events: sampleEvents });
};

main().catch((e) => {
	console.log(e);
});
