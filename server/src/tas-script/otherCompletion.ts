interface CompletionDefinition {
    [name: string]: {
        description: string
    }
}

export const startTypes: CompletionDefinition = {
    now: {
        description: "Starts playing the TAS immediately, or as soon as a session is started."
    },
    save: {
        description: "Starts playing the TAS after loading the given save.",
    },
    map: {
        description: "Starts playing the TAS after loading into the given map.",
    },
    cm: {
        description: "Starts playing the TAS after loading into the given map, but in Challenge Mode."
    },
    next: {
        description: "Starts playing the TAS on the next session start."
    }
};

type CompletionItem = { name: string, description: string };
export const startCompletion: CompletionItem = { name: "start", description: "**Syntax:** ```start <map|save|cm|now|next>```\n\nDefines how the TAS should start. Must be the first statement in a script." };
export const repeatCompletion: CompletionItem = { name: "repeat", description: "**Syntax:** ```repeat <iterations>```\n\nMarks the start of a repeat block with given iterations. Must have a corresponding ```end``` statement later down in the file." };
export const endCompletion: CompletionItem = { name: "end", description: "**Syntax:** ```end```\n\nMarks the end of a loop. Must have a corresponding ```repeat``` further up in the file." };