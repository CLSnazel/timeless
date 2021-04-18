import React, { useState, useEffect } from 'react'
import { Switch, Text, Heading, TextInput, SelectMenu, Button, Checkbox } from 'evergreen-ui'
import { FormContainer, FormHeader, FormBody, FormChild, DeleteButton } from './Alarms.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const localeTime = new Date().toLocaleTimeString('it-IT').substr(0, 8)

export default function AlarmsForm({ alarm, daysActive, sound, user }) {
  const { active, silenceAfter, snoozeLength, snoozeRepeatTimes, time} = alarm
  const [alarmData, setAlarmData] = useState({
    time: time || localeTime,
    hour: '',
    minutes: '',
    amPm: 'AM',
    active,
    daysActive,
    silenceAfter,
    snoozeLength,
    snoozeRepeatTimes,
    soundName: sound.name,
    user
  })

  useEffect(() => {
    const convertTime = () => {
      const [hours, minutes] = time.split(':')
      const parsedHour = parseInt(hours)
      if (parsedHour > 12) {
        setAlarmData({
          ...alarmData,
          hour: parsedHour - 12,
          minutes,
          amPm: 'PM'
        })
      } else if (!parsedHour) {
        setAlarmData({
          ...alarmData,
          hour: 12,
          minutes
        })
      } else {
        setAlarmData({
          ...alarmData,
          hour: parsedHour,
          minutes
        })
      }
    }
    convertTime()
  }, [time])

  const activeDays = daysActive.map(({ day, active })=>(
    <Button
      key={day.replace(/ /g, '')}
      appearance={active ? 'primary' : 'default'}
    >
      {day.substring(0, 3)}
    </Button>
  ))

  return (
    <FormContainer>
      <FormHeader>
        <Heading size={700}>{alarmData.time}</Heading>
        <Switch
          checked={alarmData.active}
          hasCheckIcon={false}
          onChange={e => setAlarmData({ ...alarmData,  active: e.target.checked })}
        />
      </FormHeader>
      <FormBody>
        <Heading>Set Time</Heading>
        <FormChild>
          <TextInput
            width={42}
            height={28}
            textAlign='center'
            onChange={e => setAlarmData({ ...alarmData,  hour: e.target.value })}
            value={alarmData.hour}
          />
          <Text>:</Text>
          <TextInput
            width={42}
            height={28}
            textAlign='center'
            onChange={e => setAlarmData({ ...alarmData,  minutes: e.target.value })}
            value={alarmData.minutes}
          />
          <Button>AM</Button>
          <Button>PM</Button>
        </FormChild>

        <Checkbox label='Repeat Every Day' marginBottom={5}/>
        <FormChild>
          {activeDays}
        </FormChild>

        <Heading>Silence After</Heading>
        <FormChild>
        <TextInput
          width={32}
          height={28}
          textAlign='center'
          onChange={e => setAlarmData({ ...alarmData,  silenceAfter: e.target.value })}
          value={alarmData.silenceAfter}
        />
        <Text>minutes</Text>
        </FormChild>

        <Checkbox label='Snooze' marginBottom={0} />
        <FormChild>
          <Text>Sound my alarm every</Text>
          <TextInput
            width={32}
            height={28}
            textAlign='center'
            onChange={e => setAlarmData({ ...alarmData,  snoozeLength: e.target.value })}
            value={alarmData.snoozeLength}
          />
          <Text>minutes, and repeat this</Text>
          <TextInput
            width={32}
            height={28}
            textAlign='center'
            onChange={e => setAlarmData({ ...alarmData,  snoozeRepeatTimes: e.target.value })}
            value={alarmData.snoozeRepeatTimes}
          />
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
            selected={alarmData.soundName}
            value={alarmData.soundName}
            onSelect={item => setAlarmData({ ...alarmData, soundName: item.value })}
          >
            <Button>{alarmData.soundName || 'Select sound...'}</Button>
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
