export const parseDate = (d) => {
    let arr = d.split('-');
    //console.log('check the split', arr)
    
    // object table for month conversion
    const num2date = {
      '01': 'January',
      '02': 'Feburary',
      '03': 'March',
      '04': 'April',
      '05': 'May',
      '06': 'June',
      '07': 'July',
      '08': 'August',
      '09': 'September',
      '10': 'October',
      '11': 'November',
      '12': 'December'
    }

    // function to add st rd and so on
    const appendDay =  function(day) {
      const dayArr = day.split('');
      const last = dayArr[dayArr.length-1];
      let answer = '';
      switch (last) {
        case '1': 
          answer = 'st';
          break;
        case '2':
          answer = 'nd';
          break;
        case '3':
          answer = 'rd';
          break;
        default:
          answer = 'th';
      }
      
      const remove0 = (dayArr[0] === '0') ? `${dayArr[1]}${answer}` : `${day}${answer}`;
      return remove0;
    }
    
    return `${num2date[ arr[1] ]} ${appendDay(arr[2])} ${arr[0]}`;
}