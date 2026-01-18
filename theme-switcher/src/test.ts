type types = {
 val1 : String,
 val2: Number
}

const something = (data: {data: types}): void => {
 console.log(data)
}

export default something 