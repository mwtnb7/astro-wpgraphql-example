type Props = {
  title: string;
  date: Date | string;
  href: string;
  labels?: { name: string }[];
};

const PostItem: React.FC<Props> = ({ title, date, href, labels }) => {
  // Date オブジェクトに変換
  const dateObj = new Date(date);

  // 年、月、日を取得
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // 月は0から始まるため、1を足す
  const day = String(dateObj.getDate()).padStart(2, '0');

  // フォーマットされた日付文字列を生成
  const formattedDate = `${year}/${month}/${day}`;

  return (
    <article>
      <a href={href} className="block py-3 border-t transition-opacity hover:opacity-50">
        <h3>{title}</h3>
        <p>{formattedDate}</p>
        {labels && (
          <ul>
            {labels.map((label, index) => (
              <li key={index}>{label.name}</li>
            ))}
          </ul>
        )}
      </a>
    </article>
  );
};

export default PostItem;
