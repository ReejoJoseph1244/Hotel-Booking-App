import './mailList.css'

export default function MailList() {
  return (
    <div className="mail">
    <h1 className="mailTitle">Contact US</h1>
    <span className="mailDesc">Sign up and get Exciting Discounts!!</span>
    <div className="mailInputContainer">
      <input type="text" placeholder="Your Email" />
      <button>Subscribe</button>
    </div>
  </div>
  )
}
