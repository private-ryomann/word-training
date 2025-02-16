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
export default async function EventsPage() {
	const events = await db.query.events.findMany({
		with: {
			eventTags: {
				with: {
					tag: true,
				},
			},
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
						{events.map((event) =>
							event.eventTags.map((eventTag) => {
								return eventTag.tag ? (
									<Badge key={eventTag.tag.id}>{eventTag.tag.name}</Badge>
								) : null;
							}),
						)}
					</div>
				</div>
				<div className="flex flex-col mt-3">
					{events.map((event) => (
						<Card key={event.id} className="mt-3">
							<CardHeader className="p-3">
								<CardTitle>{event.title}</CardTitle>
							</CardHeader>
							<CardContent className="p-3 pt-0">
								<p>{format(event.occurredAt, "yyyy-MM-dd")}</p>
							</CardContent>
							<CardFooter className="p-3 pt-0">
								<div className="flex flex-row">
									{event.eventTags.map((eventTag) => {
										return eventTag.tag ? (
											<Badge key={eventTag.tag.id} className="mr-2">
												{eventTag.tag.name}
											</Badge>
										) : null;
									})}
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
