type DateFormat = 'allDate' | 'yearMonthDay' | 'monthDay' | 'time';

const getFormatDate = (date: string, formatType: DateFormat) => {
  const formatDate = new Date(date);

  // year, month, day, time
  const yearMonthDay = `${formatDate.getFullYear()}년 ${formatDate.getMonth() + 1}월 ${formatDate.getDate()}일`;
  const monthDay = `${formatDate.getMonth() + 1}월 ${formatDate.getDate()}일`;
  const hours = formatDate.getHours().toString().padStart(2, '0');
  const minutes = formatDate.getMinutes().toString().padStart(2, '0');
  const time = `${hours}:${minutes}`;
  const allDate = yearMonthDay + ' ' + time;

  // number type
  const dateNumber = formatDate.getTime();

  // except time in date comparison
  const dateWithoutTime = new Date(formatDate);
  dateWithoutTime.setHours(0, 0, 0, 0); // 시간을 00:00:00로 설정해서 비교

  // 날짜 비교를 위한 숫자만 추출
  const dateNumberWithoutTime = dateWithoutTime.getTime();

  switch (formatType) {
    case 'allDate':
      return { formattedDate: allDate, dateNumber, dateNumberWithoutTime };
    case 'yearMonthDay':
      return { formattedDate: yearMonthDay, dateNumber, dateNumberWithoutTime };
    case 'monthDay':
      return { formattedDate: monthDay, dateNumber, dateNumberWithoutTime };
    case 'time':
      return { formattedDate: time, dateNumber, dateNumberWithoutTime };
    default:
      return { formattedDate: allDate, dateNumber, dateNumberWithoutTime };
  }
};

export default getFormatDate;
