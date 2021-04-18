import React, { useState } from 'react'
import { Switch, Text, Heading, TextInput, SelectMenu, Button, Checkbox } from 'evergreen-ui'
import { FormContainer, FormHeader, FormBody, FormChild, DeleteButton } from './Alarms.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'


const days = [
  {day: 'Monday', active: 'false'},
  {day: 'Tuesday', active: 'false'},
  {day: 'Wednesday', active: 'false'},
  {day: 'Thursday', active: 'false'},
  {day: 'Friday', active: 'false'},
  {day: 'Saturday', active: 'false'},
  {day: 'Sunday', active: 'false'},
]

export default function AlarmsForm() {
  const [activeAlarm, setActiveAlarm] = useState(true)
  const [sound, setSound] = useState('')
  const time = '7:30 am'

  const activeDays = days.map(({ day, active })=>(
    <Button key={day.replace(/ /g, '')}>{day.substring(0, 3)}</Button>
  ))

  return (
    <FormContainer>
      <FormHeader>
        <Heading size={700}>{time}</Heading>
        <Switch
          checked={activeAlarm}
          hasCheckIcon={false}
          onChange={e => setActiveAlarm(e.target.checked)}
        />
      </FormHeader>
      <FormBody>
        <Heading>Set Time</Heading>
        <FormChild>
          <TextInput width={28} height={28} />
          <Text>:</Text>
          <TextInput width={28} height={28} />
          <Button>AM</Button>
          <Button>PM</Button>
        </FormChild>

        <Checkbox label='Repeat Every Day' marginBottom={5}/>
        <FormChild>
          {activeDays}
        </FormChild>

        <Heading>Silence After</Heading>
        <FormChild>
        <TextInput width={28} height={28}/>
        <Text>minutes</Text>
        </FormChild>

        <Checkbox label='Snooze' marginBottom={0} />
        <FormChild>
          <Text>Sound my alarm every</Text>
          <TextInput width={28} height={28} />
          <Text>minutes, and repeat this</Text>
          <TextInput width={28} height={28} />
          <Text>times.</Text>
        </FormChild>

        <Checkbox label='Randomize Alarm Sound' marginBottom={5}/>
        <FormChild>
          <SelectMenu
            hasTitle={false}
            hasFilter={false}
            options={
              ['Nature', 'Music']
                .map(label => ({ label, value: label }))
            }
            selected={sound}
            onSelect={item => setSound(item.value)}
          >
            <Button>{sound || 'Select sound...'}</Button>
          </SelectMenu>
        </FormChild> 
        <DeleteButton>
          <button>
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </DeleteButton>
      </FormBody>
    </FormContainer>
  )
}
