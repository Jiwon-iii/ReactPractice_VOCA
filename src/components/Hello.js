import { useState } from 'react';

export default function Hello() {
    const [name, setName] = useState('AAA');

    function setName() {
        const name = name === 'AAA' ? 'BBB' : 'AAA';
        setName(name);
    }

    return (
        <div>
            <h2 id='name'>AAA</h2>
            <button onClick={setName}>이름 변경</button>
        </div>
    );
}