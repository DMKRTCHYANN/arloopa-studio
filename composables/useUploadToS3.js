export const useUploadToS3 = (file, prefix, path, loadingManager = null) => {
    const filename = file.name
    console.log(1)
    return new Promise(

        async (resolve, reject) => {
            console.log(2)
            if (loadingManager !== null) {
                loadingManager.itemStart(filename)
            }
            console.log(3)

            const {data, error} = await useAuthFetch(`/api/signed-url/${path}?file_name=${filename}`)
            console.log(4)

            const uploadFileName = data.value.data.file_name
            const signedUrl = data.value.data.upload_url
            console.log(5)

            const xhr = new XMLHttpRequest()
            xhr.open('PUT', signedUrl, true)
            xhr.onload = () => {
                if (xhr.status === 200) {
                    event.target.value = ''

                    if (!/safari/i.test(navigator.userAgent)) {
                        event.target.type = ''
                        event.target.type = 'file'
                    }
                    if (loadingManager !== null) {
                        loadingManager.itemEnd(filename)
                    }
                    resolve(prefix + '/' + uploadFileName)
                } else {
                    reject(new Error('error'))
                }
            }
            xhr.upload.onprogress = (progress) => {
                if (loadingManager !== null) {
                    loadingManager.onProgress(filename, progress.loaded, progress.total)
                }
                console.log(Math.round(progress.loaded / progress.total * 100))
            }
            xhr.onerror = () => {

                if (loadingManager !== null) {
                    loadingManager.itemError(filename)
                }

                reject()
            }
            xhr.send(file)
        })
}
