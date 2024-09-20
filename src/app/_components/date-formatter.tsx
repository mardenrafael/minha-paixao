import { parseISO, format } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>
      {format(date, "LLLL	d, yyyy", {
        locale: ptBR,
      })}
    </time>
  );
};

export default DateFormatter;
