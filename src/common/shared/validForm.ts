
export const validForm = (userData: any) => {
    let { biography, first_name, last_name, job } = userData;
    for(let i in userData){
        if(!userData[i]){
            return {message: 'All fields are required!'}
        }
    }
    if(first_name.length > 256){
        return {message: 'Maximum allowable length for a first name of 256 characters!'}
    }
    if(last_name.length > 256){
        return {message: 'Maximum allowable length for last name 256 characters!'}
    }
    if(job.length > 256){
        return {message: 'Maximum allowable length for the profession is 256 characters!'}
    }
    if(biography.length > 1024){
        return {message: 'Maximum allowable length for biography 1024 characters!'}
    }
    return {message: ''}
}