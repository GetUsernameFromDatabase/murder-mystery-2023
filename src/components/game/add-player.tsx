import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronsUpDown } from "lucide-react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as z from "zod";

import { Button } from "../ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "../ui/command";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

import { availablePlayerColours } from "@/data/players";
import { cn } from "@/lib/utils";
import { addPlayer } from "@/store/slices/players-slice";

function AddPlayer() {
  const dispatch = useDispatch();

  const formSchema = z.object({
    name: z.string().min(2).max(50),
    colour: z.enum(availablePlayerColours),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      colour: "#0c505b",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    dispatch(addPlayer({ ...values }));
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Player</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Player</DialogTitle>
          <DialogDescription>
            Fill in the required information for new player
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Player Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Player Name Here..." {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your character name.<br></br>Feel free to name
                    yourself <i>male chicken enjoyer</i>
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="colour"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Colour</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn(
                            "w-[200px] justify-between",
                            !field.value && "text-muted-foreground",
                            `bg-[${field.value}] hover:bg-[${field.value}]/60`,
                          )}
                        >
                          {field.value
                            ? availablePlayerColours.find(
                                (colour) => colour === field.value,
                              )
                            : "Select colour"}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                      <Command>
                        <CommandInput placeholder="Search colour..." />
                        <CommandEmpty>No colour found.</CommandEmpty>
                        <CommandGroup>
                          {availablePlayerColours.map((colour) => (
                            <CommandItem
                              value={colour}
                              key={colour}
                              onSelect={() => {
                                form.setValue("colour", colour);
                              }}
                              className={`bg-[${colour}] aria-selected:bg-[${colour}]/60`}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  colour === field.value
                                    ? "opacity-100"
                                    : "opacity-0",
                                )}
                              />
                              {colour}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <FormDescription>This will be yer colour</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit">Add Player</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default AddPlayer;
