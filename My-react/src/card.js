import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

function Card(props) {
  return (
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">{props.card.planName}</h5>
          <h6 className="card-price text-center"><span className="fs-1">${props.card.month}</span><span className="period">/month</span></h6>
          <hr />
          {
            props.card.feauter.map((item) => {
              return (
                <ul classNameName="fa-ul">

                  <li> <FontAwesomeIcon icon={faCheck}/>
                  &nbsp; {item.user} <b>{item.multiUser}</b>
                  </li>

                  <li><FontAwesomeIcon icon={faCheck}/>
                  &nbsp; {item.gb}
                  </li>

                  <li><FontAwesomeIcon icon={faCheck}/>
                  &nbsp;  Unlimited Public Projects
                  </li>

                  <li><FontAwesomeIcon icon={faCheck}/>
                  &nbsp; Community Access
                  </li>

                  <li className={item.muted1}>{item.check1?<FontAwesomeIcon icon={faCheck}/>:<FontAwesomeIcon icon={faTimes}/>}
                  &nbsp; Unlimited Private Projects
                  </li>

                  <li className={item.muted2}>{item.check2?<FontAwesomeIcon icon={faCheck}/>:<FontAwesomeIcon icon={faTimes}/>}
                  &nbsp; Dedicated Phone Support
                  </li>

                  <li className={item.muted3}>{item.check3?<FontAwesomeIcon icon={faCheck}/>:<FontAwesomeIcon icon={faTimes}/>}
                  &nbsp; Free Subdomain
                  </li>

                  <li className={item.muted4}>{item.check4?<FontAwesomeIcon icon={faCheck}/>:<FontAwesomeIcon icon={faTimes}/>}
                  &nbsp;<b>{item.unlimited}</b> Monthly Status Reports
                  </li>
                  
                </ul>)
            })
            }
          <div className="d-grid">
            <a href="#" className="btn btn-primary text-uppercase rounded-pill">Button</a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;


