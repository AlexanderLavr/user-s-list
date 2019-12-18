import axios from 'axios';

export function request(url: string, method: any, body?: object) {
    return (
        axios({
            url: `http://frontend-candidate.dev.sdh.com.ua/v1/${url}`,
            method: method,
            data: body,
            headers: {'Content-Type': 'application/json'}
        }).then((response: any) =>  response.data )
    );
}