export function helloWorld() {
    console.info('here')
    return 'Hello World from NPM and use something'
}

export function getSumOfArray(array) {
    return array.reduce((acc, sum) => acc + sum, 0)
}
