import { UsersRound } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  ChevronDown,
  TicketSlash,
  Plus,
  NotepadText,
  MoveUpRight,
} from "lucide-react";

const Details = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <section className="flex flex-col gap-2 px-8 py-4">
      <div className="flex flex-col gap-4">
        <div className="flex w-full justify-between sm:w-2/3">
          <p className="font-semibold text-gray-500">Assignee</p>
          <div className="flex items-center gap-2.5 font-medium text-gray-600 dark:text-gray-300">
            <img
              src="https://randomuser.me/api/portraits/men/44.jpg"
              alt="You"
              className="h-6 w-6 rounded-full object-cover"
            />
            Bryan Byrne
          </div>
        </div>
        <div className="flex w-full justify-between sm:w-2/3">
          <p className="font-semibold text-gray-500">Team</p>
          <div className="flex items-center gap-2.5 font-medium text-gray-600 dark:text-gray-300">
            <UsersRound className="h-6 w-6" />
            Unassigned
          </div>
        </div>
      </div>
      <Separator className="my-1" />
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-full space-y-2 sm:w-[95%]"
      >
        <div className="flex items-center justify-between space-x-4">
          <h4 className="text-sm font-bold">LINKS</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm">
              <ChevronDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="flex flex-col gap-2 space-y-2">
          <div>
            <div className="text-md flex justify-between gap-2 py-2 font-semibold">
              <div className="flex gap-2 dark:text-neutral-400">
                <TicketSlash /> Tracker ticket
              </div>
              <Button
                variant="secondary"
                size="icon"
                className="bg-gray-200 dark:bg-neutral-900"
              >
                <Plus className="text-gray-600" />
              </Button>
            </div>
            <div className="text-md flex justify-between gap-2 py-2 font-semibold">
              <div className="flex gap-2 dark:text-neutral-400">
                <NotepadText /> Back-office tickets
              </div>
              <Button
                variant="secondary"
                size="icon"
                className="bg-gray-200 dark:bg-neutral-900"
              >
                <Plus className="text-gray-600" />
              </Button>
            </div>
            <div className="text-md flex justify-between gap-2 py-2 font-semibold">
              <div className="flex gap-2 dark:text-neutral-400">
                <MoveUpRight /> Side Conversations
              </div>
              <Button
                variant="secondary"
                size="icon"
                className="bg-gray-200 dark:bg-neutral-900"
              >
                <Plus className="text-gray-600" />
              </Button>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
      <Separator className="my-1" />
      <Collapsible
        // open={isOpen}
        // onOpenChange={setIsOpen}
        className="w-full space-y-2 sm:w-[95%]"
      >
        <div className="flex items-center justify-between space-x-4">
          <h4 className="text-sm font-bold">USER DATA</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm">
              <ChevronDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="flex flex-col gap-2 space-y-2">
          <div>
            <div className="text-md flex justify-between gap-2 py-2 font-semibold">
              <div className="flex gap-2 dark:text-neutral-400">
                <TicketSlash /> Tracker ticket
              </div>
              <Button
                variant="secondary"
                size="icon"
                className="bg-gray-200 dark:bg-neutral-900"
              >
                <Plus className="text-gray-600" />
              </Button>
            </div>
            <div className="text-md flex justify-between gap-2 py-2 font-semibold">
              <div className="flex gap-2 dark:text-neutral-400">
                <NotepadText /> Back-office tickets
              </div>
              <Button
                variant="secondary"
                size="icon"
                className="bg-gray-200 dark:bg-neutral-900"
              >
                <Plus className="text-gray-600" />
              </Button>
            </div>
            <div className="text-md flex justify-between gap-2 py-2 font-semibold">
              <div className="flex gap-2 dark:text-neutral-400">
                <MoveUpRight /> Side Conversations
              </div>
              <Button
                variant="secondary"
                size="icon"
                className="bg-gray-200 dark:bg-neutral-900"
              >
                <Plus className="text-gray-600" />
              </Button>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
      <Separator className="my-1" />
      <Collapsible
        // open={isOpen}
        // onOpenChange={setIsOpen}
        className="w-full space-y-2 sm:w-[95%]"
      >
        <div className="flex items-center justify-between space-x-4">
          <h4 className="text-sm font-bold">CONVERSATION ATTRIBUTES</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm">
              <ChevronDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="flex flex-col gap-2 space-y-2">
          <div>
            <div className="text-md flex justify-between gap-2 py-2 font-semibold">
              <div className="flex gap-2 dark:text-neutral-400">
                <TicketSlash /> Tracker ticket
              </div>
              <Button
                variant="secondary"
                size="icon"
                className="bg-gray-200 dark:bg-neutral-900"
              >
                <Plus className="text-gray-600" />
              </Button>
            </div>
            <div className="text-md flex justify-between gap-2 py-2 font-semibold">
              <div className="flex gap-2 dark:text-neutral-400">
                <NotepadText /> Back-office tickets
              </div>
              <Button
                variant="secondary"
                size="icon"
                className="bg-gray-200 dark:bg-neutral-900"
              >
                <Plus className="text-gray-600" />
              </Button>
            </div>
            <div className="text-md flex justify-between gap-2 py-2 font-semibold">
              <div className="flex gap-2 dark:text-neutral-400">
                <MoveUpRight /> Side Conversations
              </div>
              <Button
                variant="secondary"
                size="icon"
                className="bg-gray-200 dark:bg-neutral-900"
              >
                <Plus className="text-gray-600" />
              </Button>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
      <Separator className="my-1" />
      <Collapsible
        // open={isOpen}
        // onOpenChange={setIsOpen}
        className="w-full space-y-2 sm:w-[95%]"
      >
        <div className="flex items-center justify-between space-x-4">
          <h4 className="text-sm font-bold">COMPANY DETAILS</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm">
              <ChevronDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="flex flex-col gap-2 space-y-2">
          <div>
            <div className="text-md flex justify-between gap-2 py-2 font-semibold">
              <div className="flex gap-2 dark:text-neutral-400">
                <TicketSlash /> Tracker ticket
              </div>
              <Button
                variant="secondary"
                size="icon"
                className="bg-gray-200 dark:bg-neutral-900"
              >
                <Plus className="text-gray-600" />
              </Button>
            </div>
            <div className="text-md flex justify-between gap-2 py-2 font-semibold">
              <div className="flex gap-2 dark:text-neutral-400">
                <NotepadText /> Back-office tickets
              </div>
              <Button
                variant="secondary"
                size="icon"
                className="bg-gray-200 dark:bg-neutral-900"
              >
                <Plus className="text-gray-600" />
              </Button>
            </div>
            <div className="text-md flex justify-between gap-2 py-2 font-semibold">
              <div className="flex gap-2 dark:text-neutral-400">
                <MoveUpRight /> Side Conversations
              </div>
              <Button
                variant="secondary"
                size="icon"
                className="bg-gray-200 dark:bg-neutral-900"
              >
                <Plus className="text-gray-600" />
              </Button>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
      <Separator className="my-1" />
      <Collapsible
        // open={isOpen}
        // onOpenChange={setIsOpen}
        className="w-full space-y-2 sm:w-[95%]"
      >
        <div className="flex items-center justify-between space-x-4">
          <h4 className="text-sm font-bold">SALESFORCE</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm">
              <ChevronDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="flex flex-col gap-2 space-y-2">
          <div>
            <div className="text-md flex justify-between gap-2 py-2 font-semibold">
              <div className="flex gap-2 dark:text-neutral-400">
                <TicketSlash /> Tracker ticket
              </div>
              <Button
                variant="secondary"
                size="icon"
                className="bg-gray-200 dark:bg-neutral-900"
              >
                <Plus className="text-gray-600" />
              </Button>
            </div>
            <div className="text-md flex justify-between gap-2 py-2 font-semibold">
              <div className="flex gap-2 dark:text-neutral-400">
                <NotepadText /> Back-office tickets
              </div>
              <Button
                variant="secondary"
                size="icon"
                className="bg-gray-200 dark:bg-neutral-900"
              >
                <Plus className="text-gray-600" />
              </Button>
            </div>
            <div className="text-md flex justify-between gap-2 py-2 font-semibold">
              <div className="flex gap-2 dark:text-neutral-400">
                <MoveUpRight /> Side Conversations
              </div>
              <Button
                variant="secondary"
                size="icon"
                className="bg-gray-200 dark:bg-neutral-900"
              >
                <Plus className="text-gray-600" />
              </Button>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
      <Separator className="my-1" />
      <Collapsible
        // open={isOpen}
        // onOpenChange={setIsOpen}
        className="w-full space-y-2 sm:w-[95%]"
      >
        <div className="flex items-center justify-between space-x-4">
          <h4 className="text-sm font-bold">STRIPE</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm">
              <ChevronDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="flex flex-col gap-2 space-y-2">
          <div>
            <div className="text-md flex justify-between gap-2 py-2 font-semibold">
              <div className="flex gap-2 dark:text-neutral-400">
                <TicketSlash /> Tracker ticket
              </div>
              <Button
                variant="secondary"
                size="icon"
                className="bg-gray-200 dark:bg-neutral-900"
              >
                <Plus className="text-gray-600" />
              </Button>
            </div>
            <div className="text-md flex justify-between gap-2 py-2 font-semibold">
              <div className="flex gap-2 dark:text-neutral-400">
                <NotepadText /> Back-office tickets
              </div>
              <Button
                variant="secondary"
                size="icon"
                className="bg-gray-200 dark:bg-neutral-900"
              >
                <Plus className="text-gray-600" />
              </Button>
            </div>
            <div className="text-md flex justify-between gap-2 py-2 font-semibold">
              <div className="flex gap-2 dark:text-neutral-400">
                <MoveUpRight /> Side Conversations
              </div>
              <Button
                variant="secondary"
                size="icon"
                className="bg-gray-200 dark:bg-neutral-900"
              >
                <Plus className="text-gray-600" />
              </Button>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
      <Separator className="my-1" />
      <Collapsible
        // open={isOpen}
        // onOpenChange={setIsOpen}
        className="w-full space-y-2 sm:w-[95%]"
      >
        <div className="flex items-center justify-between space-x-4">
          <h4 className="text-sm font-bold">JIRA FOR TICKETS</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm">
              <ChevronDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="flex flex-col gap-2 space-y-2">
          <div>
            <div className="text-md flex justify-between gap-2 py-2 font-semibold">
              <div className="flex gap-2 dark:text-neutral-400">
                <TicketSlash /> Tracker ticket
              </div>
              <Button
                variant="secondary"
                size="icon"
                className="bg-gray-200 dark:bg-neutral-900"
              >
                <Plus className="text-gray-600" />
              </Button>
            </div>
            <div className="text-md flex justify-between gap-2 py-2 font-semibold">
              <div className="flex gap-2 dark:text-neutral-400">
                <NotepadText /> Back-office tickets
              </div>
              <Button
                variant="secondary"
                size="icon"
                className="bg-gray-200 dark:bg-neutral-900"
              >
                <Plus className="text-gray-600" />
              </Button>
            </div>
            <div className="text-md flex justify-between gap-2 py-2 font-semibold">
              <div className="flex gap-2 dark:text-neutral-400">
                <MoveUpRight /> Side Conversations
              </div>
              <Button
                variant="secondary"
                size="icon"
                className="bg-gray-200 dark:bg-neutral-900"
              >
                <Plus className="text-gray-600" />
              </Button>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </section>
  );
};

export default Details;
