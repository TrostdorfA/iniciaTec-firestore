export const todoListTransform = (data) => {
    const transformedData = data.map((item) => {
        const { id, name, email, phone, website } = item
        return {
        id: id.tostring(),
        name: name.tostring(),
        email: email.tostring(),
        phone: phone.tostring(),
        website: website.tostring(),
        }
    })
    return transformedData
    }
