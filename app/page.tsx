"use client"
import { useState } from 'react';

const CalculatorApp =  () => {
  const [num, setNum] = useState(0);
  const [oldnum, setOldNum] = useState(0);
  const [operator, setOperator] = useState('');
  const [search, setSearch] = useState('');

  const handleClick =  (e:React.MouseEvent <HTMLButtonElement>)  =>  {
    const value = (e.target as HTMLButtonElement).value;
    if (value === 'C') {
      setNum(0);
      setOldNum(0);
      setOperator('');
      setSearch('');
    } else if (value === '+' || value === '-' || value === '*' || value === '/') {
      setOperator(value);
      setOldNum(num);
      setNum(0);
      setSearch(search + value);
    } else if (value === '=') {
      let result;
      switch (operator) {
        case '+':
          result = oldnum + num;
          break;
        case '-':
          result = oldnum - num;
          break;
        case '*':
          result = oldnum * num;
          break;
        case '/':
          result = oldnum / num;
          break;
        default:
          result = 0;
      }
      setNum(result);
      setOldNum(0);
      setOperator('');
      setSearch('');
    } else {
      setNum(num * 10 + parseInt(value));
      setSearch(search + value);
    }
  };

  return (
    
    <div className="max-w-md mx-auto bg-green-400 rounded-2xl p-6 mt-12 border-2">
      <div className="bg-white rounded-2xl p-4 mb-4">
        <h1 className="text-3xl font-bold text-indigo-500">{search}</h1>
        <h1 className="text-3xl font-bold text-indigo-500">{num}</h1>
      </div>
      <div className="grid grid-cols-4 gap-2">
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          value="7"
          onClick={handleClick}
        >
          7
        </button>
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          value="8"
          onClick={handleClick}
        >
          8
        </button>
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          value="9"
          onClick={handleClick}
        >
          9
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          value="C"
          onClick={handleClick}
        >
          C
        </button>
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          value="4"
          onClick={handleClick}
        >
          4
        </button>
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          value="5"
          onClick={handleClick}
        >
          5
        </button>
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          value="6"
          onClick={handleClick}
        >
          6
        </button>
        <button
          className="bg-indigo-700 hover:bg-indigo-900 text-white font-bold py-2 px-4 rounded"
          value="+"
          onClick={handleClick}
        >
          +
        </button>
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          value="1"
          onClick={handleClick}
        >
          1
        </button>
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          value="2"
          onClick={handleClick}
        >
          2
        </button>
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          value="3"
          onClick={handleClick}
        >
          3
        </button>
        <button
          className="bg-indigo-700 hover:bg-indigo-900 text-white font-bold py-2 px-4 rounded"
          value="-"
          onClick={handleClick}
        >
          -
        </button>
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          value="0"
          onClick={handleClick}
        >
          0
        </button>
        <button
          className="bg-indigo-700 hover:bg-indigo-900 text-white font-bold py-2 px-4 rounded"
          value="*"
          onClick={handleClick}
        >
          *
        </button>
        <button
          className="bg-indigo-700 hover:bg-indigo-900 text-white font-bold py-2 px-4 rounded"
          value="/"
          onClick={handleClick}
        >
          /
        </button>
        <button
          className="bg-red-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          value="="
          onClick={handleClick}
        >
          =
        </button>
       
      </div>
      <h1 id='owner'>Create by Jawad Shoukat</h1>
    </div>
 
  );
};

export default CalculatorApp;