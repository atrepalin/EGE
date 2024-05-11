import { FC, useEffect, useRef, useState } from "react";
import Select, { MultiValue, MultiValueGenericProps } from "react-select";

type OptionType = {
  value: string;
  remove: (option: string) => void;
};

const MultiValueContainer = ({
  data: { value, remove },
}: MultiValueGenericProps<OptionType>) => {
  return (
    <div className="border border-zinc-500 border-solid rounded-md px-2">
      <span>{value}</span>
      <span className="ml-2" onClick={() => remove(value)}>
        X
      </span>
    </div>
  );
};

const EGEs = [
  "Русский язык",
  "Математика",
  "Физика",
  "Химия",
  "История",
  "Обществознание",
  "Информатика и ИКТ",
  "Биология",
  "География",
  "Английский язык",
  "Немецкий язык",
  "Французский язык",
  "Испанский язык",
  "Китайский язык",
  "Литература",
  "Творческое испытание",
  "Собеседование",
];

interface Props {
  onOptionsChanged?: (options: string[]) => void;
}

const Selector: FC<Props> = ({ onOptionsChanged }) => {
  const defaultOpts = [
    {
      value: "Русский язык",
      remove: () => handleRemove("Русский язык"),
    },
  ];

  const withMath = [
    ...defaultOpts,
    {
      value: "Математика",
      remove: () => handleRemove("Математика"),
    },
  ];

  const optsRef = useRef<OptionType[]>(withMath);

  const [selectedOptions, setSelectedOptions] =
    useState<OptionType[]>(withMath);

  useEffect(() => {
    onOptionsChanged &&
      onOptionsChanged(selectedOptions.map((option) => option.value));
  }, [selectedOptions]);

  const handleChange = (newValue: MultiValue<OptionType>) => {
    let options = newValue.flat();

    if (options.length === 0) {
      options = defaultOpts;
    }

    optsRef.current = options;
    setSelectedOptions(options);
  };

  const handleRemove = (option: string) => {
    const options = optsRef.current.filter((opt) => opt.value !== option);
    optsRef.current = options;
    setSelectedOptions(options);
  };

  return (
    <Select
      closeMenuOnSelect={false}
      components={{ MultiValueContainer }}
      value={selectedOptions}
      onChange={handleChange}
      styles={{
        multiValue: (base) => ({
          ...base,
        }),
      }}
      isMulti
      classNames={{
        valueContainer: () => "flex gap-1",
      }}
      placeholder="Выберите экзамены..."
      isSearchable
      //@ts-ignore
      options={EGEs.map((option) => ({
        value: option,
        label: option,
        remove: handleRemove,
      }))}
    />
  );
};

export default Selector;
