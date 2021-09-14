export const textCheck=(val)=>{
    let text = true;
    const nameRegex = new RegExp(/^[a-zA-Z ]*$/);
    if ((val.trim()).length > 100 || (val.trim()).length < 2 || !(nameRegex.test(val))) {
      if ((val.trim()).length < 2) text = 'Name must contain atleast 2 characters';
      else if ((val.trim()).length > 100) text = 'Name must not contain more than 100 characters';
      else { text = 'Name can contain only alphabets and space.'; }
    }
    return text;
  }