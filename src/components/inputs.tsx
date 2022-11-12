interface StringInputProps {
  label?: string;
  value: string;
  onChange: (newValue: string) => void;
}

export function StringInput(props: StringInputProps) {
  return (
    <div>
      <label>
        {props.label && <p class="pl-1 text-sm italic text-slate-300">{props.label}</p>}
        <input
          class="m-[2px] w-full rounded border-sky-400 bg-slate-400 p-1 outline-none focus:m-0 focus:border-2 focus:bg-slate-300"
          type="text"
          value={props.value}
          onChange={(e) => props.onChange(e.currentTarget.value)}
        />
      </label>
    </div>
  );
}

interface NumberInputProps {
  label?: string;
  value: number;
  onChange: (newValue: number) => void;
}

export function NumberInput(props: NumberInputProps) {
  return (
    <div>
      <label>
        {props.label && <p class="pl-1 text-sm italic text-slate-300">{props.label}</p>}
        <input
          class="m-[2px] w-full rounded border-sky-400 bg-slate-400 p-1 text-black outline-none focus:m-0 focus:border-2 focus:bg-slate-300"
          type="number"
          value={props.value}
          onChange={(e) => props.onChange(+e.currentTarget.value)}
        />
      </label>
    </div>
  );
}
