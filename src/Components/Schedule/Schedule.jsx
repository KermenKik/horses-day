import './Schedule.scss';
import '../../App.css';

export const Schedule = () => {

  const scheduleList = [
    {
      time: '09:40',
      description: 'Встречаемся у причала «Троице-Лыково»',
    },
    {
      time: '09:59',
      description: <p>Занимаем самые топовые места для осмотра "Серебряного бора" со стороны реки и отправляемся в речное путешествие на теплоходе <a href="https://rivertickets.ru/progulka-troitse-lykovo-strogino-troitse-lykovo.html#vessel" target="_blank">"Амстердам"</a></p>,
    },
    {
      time: '10:55',
      description: 'Надышавшись "серебрянным" воздухом, неспешно идем к м.Строгино. По дороге наверняка зайдем за каким-нибудь ништяком в магазин',
    },
    {
      time: '11:30',
      description: 'Спускаемся в метро и едем в комфортабельных вагонах до мцк Красногорская',
    },
    {
      time: '12:00',
      description: <p>Выходим из “идеальной платформы” (по словам некой Светланы Блиновой из яндекс отзывов) и направляемся к конному клубу <a href="https://horse-club8.wixsite.com/pchelka" target="_blank">"Пчелка"</a></p>,
    },
    {
      time: '12:10',
      description: 'Встречаемся с инструктором, нас знакомят с лошадьми, учат азам управления, тудасюда, и и-го-го',
    },
    {
      time: '12:30',
      description: 'Седлаем лошадей и поскакали ТЫГЫДЫК-ТЫГЫДЫК',
    },
    {
      time: '14:30',
      description: 'Живые и здоровые возвращаемся в конюшню, расседлываем лошадей, угощаем их, и идем чаепитьничать. Ну и в конце расходимся по своим нескончаемым делам',
    },
  ];

  return (
    <div className="Schedule">
      <h2 className="title">Программа</h2>
      <ul>
        {scheduleList.map(i => (
          <li key={i.time} className="Schedule__item">
            <div className="Schedule__time">{i.time}</div>
            <div className="Schedule__description">{i.description}</div>
          </li>
        ))}       
      </ul>
    </div>
  )
}