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

import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { format } from "date-fns";
/**
 * イベント一覧表示画面
 */

const tags = [
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

const events = [
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
export default function EventsPage() {
	return (
		<>
			<header className="h-10 bg-primary">
				<Drawer direction="left">
					<DrawerTrigger>Open</DrawerTrigger>
					<DrawerContent className="h-screen w-40 rounded-t-none rounded-r-md">
						<DrawerHeader>
							<DrawerClose>close</DrawerClose>
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
						{tags.map((tag) => (
							<Badge key={tag.id} className="mr-2">
								{tag.title}
							</Badge>
						))}
					</div>
				</div>
				<div className="flex flex-col mt-3">
					{events.map((event) => (
						<Card key={event.id} className="mt-3">
							<CardHeader className="p-4">
								<CardTitle>{event.title}</CardTitle>
							</CardHeader>
							<CardContent>
								<p>{format(event.occurredAt, "yyyy-MM-dd")}</p>
							</CardContent>
							<CardFooter className="p-4 pt-0">
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
			</main>
		</>
	);
}
