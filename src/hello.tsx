import React, {useState} from 'react'

const items1 = ['aaa', 'bbb', 'ccc'];
const items2 = ['111', '222', '333', '444']

function Item({content}: { content: string }) {
  return <li><input defaultValue={content}/></li>;
}

export default function Hello() {

  const [items, setItems] = useState<string[]>(items1);

  return <div>
    <div>
      <button onClick={() => setItems(items1)}>Use: {JSON.stringify(items1)}</button>
      <button onClick={() => setItems(items2)}>Use: {JSON.stringify(items2)}</button>
    </div>
    <div>
      <div style={{display: 'inline-block', width: 100}}>
        <h2>key=index</h2>
        <ul>
          {items.map((item, index) => <Item key={index} content={item}/>)}
        </ul>
      </div>
      <div style={{display: 'inline-block', width: 100, marginLeft: 100}}>
        <h2>key=item</h2>
        <ul>
          {items.map((item, index) => <Item key={item} content={item}/>)}
        </ul>
      </div>
    </div>
  </div>
};
