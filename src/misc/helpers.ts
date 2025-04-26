export const cn = (
  condition: boolean,
  classNameTrue: string | null,
  classNameFalse: string | null,
  defaultClassName: string = ""
): string => {
  const className = condition
    ? `${classNameTrue ? classNameTrue : ""} ${defaultClassName}`.trim()
    : `${classNameFalse ? classNameFalse : ""} ${defaultClassName}`.trim();

  return className;
};