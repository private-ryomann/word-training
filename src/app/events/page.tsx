import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { db } from "@/db";
import { eventTags } from "@/db/schemas/eventTags";
import { events } from "@/db/schemas/events";
import { tags } from "@/db/schemas/tags";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { format } from "date-fns";
import { eq } from "drizzle-orm";
import { FaCirclePlus } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
/**
 * イベント一覧表示画面
 */

const sampleTags = [
	{
		id: 1,
		title: "タグ1",
		color: "",
	},
	{
		id: 2,
		title: "タグ2",
		color: "",
	},
	{
		id: 3,
		title: "タグ3",
		color: "",
	},
];

const eventSamples = [
	{
		id: 1,
		title: "イベント1",
		occurredAt: new Date(),
		status: "pending",
		tags: [],
	},
	{
		id: 2,
		title: "イベント2",
		occurredAt: new Date(),
		status: "pending",
		tags: tags,
	},
	{
		id: 3,
		title: "イベント3",
		occurredAt: new Date(),
		status: "pending",
		tags: tags,
	},
	{
		id: 4,
		title: "イベント4",
		occurredAt: new Date(),
		status: "pending",
		tags: tags,
	},
	{
		id: 5,
		title: "イベント5",
		occurredAt: new Date(),
		status: "pending",
		tags: tags,
	},
	{
		id: 6,
		title: "イベント6",
		occurredAt: new Date(),
		status: "pending",
		tags: tags,
	},
];
export default async function EventsPage() {
	const selectedEvents = await db
		.select()
		.from(events)
		.innerJoin(eventTags, eq(eventTags.eventId, events.id))
		.innerJoin(tags, eq(tags.id, eventTags.tagId))
		.where(eq(events.userId, "9cebcb55-7b7c-4280-80f0-6f261c038bc1"));

	const Events = await db.query.events.findMany({
		with: {
			tags: true,
		},
		where: (events, { eq }) =>
			eq(events.userId, "9cebcb55-7b7c-4280-80f0-6f261c038bc1"),
	});

	return (
		<>
			<header className="h-10 bg-primary p-1">
				<Drawer direction="left">
					<DrawerTrigger>
						<div className="p-1">
							<span className="block w-6 h-[3px] bg-white my-1" />
							<span className="block w-6 h-[3px] bg-white my-1" />
							<span className="block w-6 h-[3px] bg-white my-1" />
						</div>
					</DrawerTrigger>
					<DrawerContent className="h-screen w-40 rounded-t-none rounded-r-md">
						<DrawerHeader className="p-2">
							<DrawerClose className="flex flex-row justify-end">
								<RxCross2 size={25} />
							</DrawerClose>
						</DrawerHeader>
						<DrawerTitle>
							<VisuallyHidden />
						</DrawerTitle>
					</DrawerContent>
				</Drawer>
			</header>
			<main className="h-[calc(h-screen - h-10)] p-2">
				<div className="flex flex-col">
					<div className="flex flex-row">
						{sampleTags.map((tag) => (
							<Badge key={tag.id} className="mr-2">
								{tag.title}
							</Badge>
						))}
					</div>
				</div>
				<div className="flex flex-col mt-3">
					{eventSamples.map((event) => (
						<Card key={event.id} className="mt-3">
							<CardHeader className="p-3">
								<CardTitle>{event.title}</CardTitle>
							</CardHeader>
							<CardContent className="p-3 pt-0">
								<p>{format(event.occurredAt, "yyyy-MM-dd")}</p>
							</CardContent>
							<CardFooter className="p-3 pt-0">
								<div className="flex flex-row">
									{event.tags.map((tag) => (
										<Badge key={tag.id} className="mr-2">
											{tag.title}
										</Badge>
									))}
								</div>
							</CardFooter>
						</Card>
					))}
				</div>
				<FaCirclePlus
					size={50}
					className="fixed bottom-3 right-5 text-primary "
				/>
			</main>
		</>
	);
}
