import { useState } from 'react'
import { PlusCircle } from '@phosphor-icons/react'

import styles from './App.module.css'

import { Header } from './components/Header'
import { Input } from './components/Input'
import { Button } from './components/Button'
import { Empty } from './components/List/Empty'
import { Header as ListHeader } from './components/List/Header'

function App() {
  const [inputValue, setInputValue] = useState('')

  return (
    <main>
      <Header />

      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          <Input
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <Button>
            Criar
            <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </Button>
        </div>

        <div className={styles.tasksList}>
          <ListHeader
            tasksCounter={0}
            checkedTasksCounter={0}
          />
          <Empty />
        </div>
      </section>
    </main>
  )
}

export default App
