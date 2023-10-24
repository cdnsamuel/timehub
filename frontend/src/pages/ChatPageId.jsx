import { useState } from 'react'

import pp from '/2.png'
import FriendsList from '../components/FriendList'
import SideBar from '../components/SideBar'

const ChatPageId = () => {
  const [inputValue, setInputValue] = useState('')

  const [conversation, setConversation] = useState([
    { id: 1, message: 'Salut, ça va ?' },
    { id: 2, message: 'Oui, et toi ?' },
    { id: 3, message: 'Je vais bien aussi, merci !' },
    {
      id: 4,
      message:
        "Dis-moi, Cléopâtre, j'ai toujours été fasciné par l'Égypte antique. Comment était la vie à cette époque ?",
    },
    {
      id: 5,
      message:
        "Ah, l'Égypte antique était un monde d'une grande richesse culturelle et d'innovations technologiques. Nous avons développé l'agriculture, l'architecture et les arts d'une manière remarquable.",
    },
    {
      id: 6,
      message:
        "C'est vraiment impressionnant. J'ai consacré ma vie à comprendre les lois de l'univers, en particulier la relativité. Comment penses-tu que tes connaissances en politique et en leadership ont influencé ton époque ?",
    },
    {
      id: 7,
      message:
        "En tant que reine d'Égypte, j'ai cherché à maintenir la stabilité politique et à améliorer la vie de mes sujets. J'ai également été une grande amatrice des arts et des sciences, encourageant les échanges intellectuels et le développement de nouvelles idées.",
    },
    {
      id: 8,
      message:
        "C'est admirable. Nous partageons tous deux une passion pour la connaissance et l'exploration. Quelles sont les découvertes scientifiques ou philosophiques qui t'ont le plus marquée ?",
    },
    {
      id: 9,
      message:
        "Les travaux d'Archimède et d'Euclide étaient très influents à mon époque. J'ai également été fascinée par l'astronomie et l'étude des étoiles. Et toi, quelles sont tes découvertes scientifiques les plus importantes ?",
    },
    {
      id: 10,
      message:
        "Ma théorie de la relativité restreinte et générale a été une avancée majeure dans notre compréhension de l'espace, du temps et de la gravité. Cela a ouvert de nouvelles perspectives sur l'univers et a eu des applications pratiques dans la technologie moderne.",
    },
    {
      id: 11,
      message:
        "C'est fascinant. Nos contributions respectives ont laissé une empreinte dans l'Histoire. Einstein, je suis curieuse de savoir comment tu envisages l'avenir de la science et de l'humanité.",
    },
    {
      id: 12,
      message:
        'Je crois en un avenir où la science continuera à nous aider à résoudre les défis mondiaux, tels que les énergies renouvelables, la santé et la préservation de notre planète. La collaboration internationale et la curiosité humaine sont essentielles pour avancer.',
    },
    {
      id: 13,
      message:
        "Je suis d'accord. La curiosité et l'échange d'idées sont des piliers de la progression de la société. Nous pouvons tous contribuer à un avenir meilleur en embrassant le savoir et en travaillant ensemble.",
    },
    {
      id: 14,
      message:
        "Absolument, Cléopâtre. Merci pour cette conversation enrichissante. Je suis convaincu que nos héritages respectifs continueront d'inspirer les générations futures.",
    },
    {
      id: 15,
      message:
        'Merci à toi aussi, Einstein. Nos chemins se croisent à travers le temps, et il est fascinant de voir comment nos visions du monde se complètent. Je te souhaite le meilleur dans tes recherches et tes explorations scientifiques.',
    },
    {
      id: 16,
      message:
        'Merci, Cléopâtre. Prends soin de toi et de ton royaume. Puissions-nous tous continuer à élargir nos horizons et à repousser les frontières de la connaissance. Au revoir !',
    },
    {
      id: 17,
      message:
        "Au revoir, Einstein. Que tes découvertes continuent d'éclairer le monde. Adieu !",
    },
  ])
  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault()

      if (inputValue.trim() !== '') {
        const newMessage = {
          id: conversation.length + 1,
          message: inputValue.trim(),
        }

        setConversation([...conversation, newMessage])
        setInputValue('')
      }
    }
  }

  return (
    <div className='lg:flex lg:justify-between lg:gap-3  '>
      <div id='1/3 ' className='flex lg:w-1/6 '>
        <SideBar />
      </div>
      <div className='flex flex-col lg:w-5/6 lg:h-[85vh] lg:overflow-y-auto lg:mt-4'>
        <div
          id=' en tete '
          className='w-full flex gap-3 border-b-2 border-secondary my-2'
        >
          <div id='Pp' className='w-20 pb-2'>
            <img src={pp} alt='Cleo' />
          </div>
          <div id='peusdo ' className='flex gap-2 text-2xl'>
            <h1>Cleopatre</h1>
            <p>@Reine_Du_Nil</p>
          </div>
        </div>
        <div id='conversation' className='flex flex-col m-2 gap-3 mb-20 '>
          {conversation.map((elem) => (
            <div
              key={elem.id}
              className={`${
                elem.id % 2 === 0
                  ? 'flex justify-end ml-3'
                  : 'flex justify-start mr-3 '
              }`}
            >
              <p
                className={`${
                  elem.id % 2 === 0
                    ? 'flex py-3 px-2 bg-accent rounded-xl'
                    : 'flex py-3 px-2 rounded-xl bg-primary'
                }`}
              >
                {elem.message}
              </p>
            </div>
          ))}
        </div>
        <div
          id=' message '
          className='flex w-full 11/12 justify-center bg-base-100 sticky bottom-16   lg:bottom-0 '
        >
          <input
            type='text'
            placeholder='Ecris le message'
            className=' bg-base-100 border rounded-lg border-secondary p-2 mt-3 w-11/12 '
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
      <div
        id='3/3'
        className='hidden lg:w-1/6 lg:h-[85vh] lg:overflow-y-auto lg:mt-4  lg:flex'
      >
        <FriendsList />
      </div>
    </div>
  )
}

export default ChatPageId
