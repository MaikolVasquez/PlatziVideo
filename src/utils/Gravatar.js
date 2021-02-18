import MD5 from 'md5'


const gravatar = (email) => {

    const base = 'https://gravatar.com/avatar/'
    const formatEmail = email.trim().toLowerCase();
    const hash = MD5(formatEmail, {encoding:"binary"});
    return `${base}${hash}`

}

export default gravatar