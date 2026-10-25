
import { useMemo, useState } from "react";
import "./App.css";
const staffMembers = [
  { id: 1, name: "Raj", role: "Stylist" },
  { id: 2, name: "Sonu", role: "Stylist" },
  { id: 3, name: "Rahul", role: "Stylist" },
  { id: 4, name: "xyz", role: "Stylist" },
];

const serviceGroups = [
  {
    name: "Hair Care",
    services: [
      ["Hair cut male", 200],
      ["Hair cut female", 400],
      ["Baby hair cut male", 150],
      ["Baby hair cut female", 250],
      ["Hair wash male", 100],
      ["Hair wash female", 250],
      ["Hair wash, shampoo & conditioning (long hair)", 350],
      ["Hair cut female (fringe / flicks)", 200],
      ["Split ends removing", 1200],
      ["Plumping wash", 1000],
      ["Hair styling male", 200],
      ["Hair styling female", 750],
      ["Hair bun style", 750],
      ["Blow dry setting female", 350],
      ["Blow dry setting with puff", 400],
      ["Blow dry with curls", 500],
      ["Spiral cut short length", 600],
      ["Spiral cut medium length", 800],
      ["Spiral cut long length", 1000],
      ["Hair ironing short length", 500],
      ["Hair ironing medium length", 700],
      ["Hair ironing long length", 900],
      ["Rebonding / Keratin / Botox / Sisten / Olaplex / Nanoplastic (boy cut)", 4000],
      ["Rebonding / Keratin / Botox / Sisten / Olaplex / Nanoplastic (blunt cut)", 5000],
      ["Rebonding / Keratin / Botox / Sisten / Olaplex / Nanoplastic (up to shoulder)", 7000],
      ["Rebonding / Keratin / Botox / Sisten / Olaplex / Nanoplastic (below shoulder)", 8000],
      ["Rebonding / Keratin / Botox / Sisten / Olaplex / Nanoplastic (up to waist)", 9000],
      ["Rebonding / Keratin / Botox / Sisten / Olaplex / Nanoplastic (below waist)", 10000],
      ["Rebonding / Keratin / Botox / Sisten / Olaplex / Nanoplastic (up to knee)", 12000],
    ],
  },
  {
    name: "Hair Colour",
    services: [
      ["Global colour male (short length)", 700],
      ["Global colour male (medium length)", 1600],
      ["Global colour female (root touch up)", 900],
      ["Global colour female (up to neck)", 1500],
      ["Global colour female (up to shoulder)", 3000],
      ["Global colour female (up to waist)", 3500],
      ["Highlights per streak", 300],
      ["Cap highlights", 1800],
      ["Crown highlights", 3500],
      ["Global highlights", 6000],
    ],
  },
  {
    name: "Face & Body",
    services: [
      ["Clean up classic", 500],
      ["Clean up Lotus", 900],
      ["Clean up O3+", 1200],
      ["Clean up D-Tan", 1000],
      ["Premium clean up", 1500],
      ["Facial basic", 1600],
      ["Facial Lotus whitening", 2500],
      ["Facial TanClear", 2200],
      ["Facial Lotus skin lifting", 3000],
      ["Facial O3+ whitening", 3000],
      ["Facial O3+ skin lifting", 3100],
      ["Facial Casmara whitening", 5000],
      ["Facial Casmara luxury Goji treatment", 6000],
      ["Facial Oxyblast", 2200],
      ["D-Tan Raga", 400],
      ["D-Tan O3+", 500],
      ["Bleach", 500],
      ["Bleach full body", 3000],
      ["Bleach body", 2500],
      ["Mask face", 1000],
      ["Mask Goji", 1500],
      ["Body polishing", 6000],
      ["D-Tan polishing", 8000],
      ["Manicure classic", 500],
      ["Manicure premium", 700],
      ["Manicure luxury", 900],
      ["Pedicure classic", 600],
      ["Pedicure premium", 900],
      ["Pedicure luxury", 1100],
    ],
  },
  {
    name: "Threading & Waxing",
    services: [
      ["Threading eyebrow", 50],
      ["Threading upper lips", 30],
      ["Threading chin", 30],
      ["Threading forehead", 30],
      ["Threading full face", 170],
      ["Waxing under arms", 50],
      ["Waxing full hands", 300],
      ["Waxing full legs", 600],
      ["Waxing half legs", 300],
      ["Waxing full back", 800],
      ["Waxing half back", 400],
      ["Waxing tummy", 400],
      ["Waxing full body", 2100],
      ["Waxing upper lips", 50],
      ["Waxing chin / side locks", 200],
      ["Waxing face", 300],
      ["Premium waxing under arms", 100],
      ["Premium waxing full hands", 500],
      ["Premium waxing full legs", 1000],
      ["Premium waxing half legs", 500],
      ["Premium waxing full back", 1000],
      ["Premium waxing half back", 500],
      ["Premium waxing tummy", 600],
      ["Premium waxing full body", 3000],
      ["Premium waxing full face", 500],
      ["Premium waxing upper lips", 50],
      ["Premium waxing chin / side locks", 200],
      ["Waxing under legs female", 2000],
    ],
  },
  {
    name: "Spa & Treatment",
    services: [
      ["Hair spa up to shoulder length", 950],
      ["Hair spa up to waist length", 1500],
      ["Anti dandruff treatment", 1500],
      ["Anti hair fall treatment male", 1500],
      ["Anti hair fall treatment female", 2000],
      ["Fibre clinix male", 1500],
      ["Fibre clinix female", 2500],
      ["Fast blow dry female", 3000],
      ["Head massage", 350],
      ["Foot massage", 600],
      ["Head steam", 350],
      ["Body massage", 2000],
    ],
  },
  {
    name: "Shaving & Trimming",
    services: [
      ["Beard shaving", 100],
      ["Beard trimming", 150],
      ["Beard shaping", 150],
      ["Head clean shave", 200],
      ["Underarms trimming male", 100],
      ["Chest trimming male", 250],
      ["Back trimming male", 250],
      ["Hand trimming male", 350],
      ["Full leg trimming male", 500],
      ["Face cleansing male", 300],
      ["Face scrubbing male", 300],
    ],
  },
];

const steps = ["Staff", "Customer", "Services", "Review"];

function App() {
  const [step, setStep] = useState(0);
  const [staff, setStaff] = useState(null);
  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [selectedServices, setSelectedServices] = useState([]);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");
  const [completed, setCompleted] = useState(false);

  const allServices = useMemo(
    () =>
      serviceGroups.flatMap((group) =>
        group.services.map(([name, price]) => ({
          name,
          price,
          category: group.name,
        }))
      ),
    []
  );

  const filteredServices = allServices.filter((service) => {
    const matchesSearch = service.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      activeCategory === "All" ||
      service.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  const total = selectedServices.reduce((sum, name) => {
    const service = allServices.find((item) => item.name === name);
    return sum + (service?.price || 0);
  }, 0);

  const toggleService = (name) => {
    setSelectedServices((current) =>
      current.includes(name)
        ? current.filter((item) => item !== name)
        : [...current, name]
    );
  };

  const updateCustomer = (event) => {
    setCustomer({
      ...customer,
      [event.target.name]: event.target.value,
    });
  };

  const canContinue = () => {
    if (step === 0) return staff !== null;
    if (step === 1) {
      return (
        customer.name.trim().length > 0 &&
        customer.phone.trim().length > 0
      );
    }
    if (step === 2) return selectedServices.length > 0;
    return rating > 0;
  };

  const finishReview = () => {
    const review = {
      staff,
      customer,
      services: selectedServices,
      total,
      rating,
      comment,
      createdAt: new Date().toISOString(),
    };

    console.log("Review preview:", review);
    setCompleted(true);
  };

  const resetForm = () => {
    setStep(0);
    setStaff(null);
    setCustomer({ name: "", phone: "", email: "" });
    setSelectedServices([]);
    setSearch("");
    setActiveCategory("All");
    setRating(0);
    setHoverRating(0);
    setComment("");
    setCompleted(false);
  };

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">D</div>
          <div className="brand-name">D SPRING</div>
          <div className="brand-subtitle">UNISEX SALON</div>
        </div>

        <div className="sidebar-label"> 
          SALON MANAGEMENT
        </div>

        <nav className="side-nav">
          <button className="nav-item active">
            <span>✳</span> New Review
          </button>
          <button className="nav-item" onClick={() => alert("Customer records will be added in a later phase.")}>
            <span>♙</span> Customers
          </button>
          <button className="nav-item" onClick={() => alert("Staff analytics will be added in a later phase.")}>
            <span>▥</span> Staff Performance
          </button>
          <button className="nav-item" onClick={() => setStep(2)}>
            <span>✂</span> Services
          </button>
        </nav>

        <div className="sidebar-bottom">
          <div className="sidebar-leaf">❋</div>
          <p>BEAUTY</p>
          <p>PEOPLE</p>
          <p>GROWTH</p>
          <div className="sidebar-line" />
          <span className="version">D SPRING · INTERNAL</span>
        </div>
      </aside>

      <main className="main-area">
        <header className="topbar">
          <div className="search-global">
            <span>⌕</span>
            <span>Salon review management</span>
          </div>
          <div className="admin">
            <span className="admin-avatar">D</span>
            <span>Salon Admin</span>
          </div>
        </header>

        <div className="page-content">
          <div className="page-heading">
            <div>
              <p className="eyebrow">D SPRING / CUSTOMER EXPERIENCE</p>
              <h1>{completed ? "Review recorded" : "Create a customer review"}</h1>
              <p className="subtitle">
                {completed
                  ? "Your review summary is ready."
                  : "Record the visit and capture customer feedback."}
              </p>
            </div>
            <div className="heading-decoration">
              <span>✳</span>
              <p>MORE THAN<br />A SALON</p>
              <div />
            </div>
          </div>

          {!completed && (
            <div className="stepper">
              {steps.map((label, index) => (
                <div className="stepper-item" key={label}>
                  <div className="stepper-top">
                    <div
                      className={`step-number ${
                        index === step
                          ? "current"
                          : index < step
                          ? "done"
                          : ""
                      }`}
                    >
                      {index < step ? "✓" : index + 1}
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`step-line ${index < step ? "done" : ""}`} />
                    )}
                  </div>
                  <span className={index === step ? "step-label current-label" : "step-label"}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          )}

          {completed ? (
            <section className="success-card">
              <div className="success-icon">✓</div>
              <p className="eyebrow">D SPRING · VISIT SUMMARY</p>
              <h2>Thank you for recording this review.</h2>
              <p className="success-description">
                This is a frontend demonstration. The review has not been
                saved to a database yet.
              </p>

              <div className="success-details">
                <div><span>Customer</span><strong>{customer.name}</strong></div>
                <div><span>Phone</span><strong>{customer.phone}</strong></div>
                <div><span>Staff member</span><strong>{staffMembers.find((s) => s.id === staff)?.name}</strong></div>
                <div><span>Services</span><strong>{selectedServices.length}</strong></div>
                <div><span>Rating</span><strong>{"★".repeat(rating)}{"☆".repeat(5 - rating)} ({rating}/5)</strong></div>
                <div><span>Total</span><strong>₹{total.toLocaleString("en-IN")}</strong></div>
              </div>

              {comment && <blockquote>{comment}</blockquote>}

              <button className="primary-button" onClick={resetForm}>
                + Create another review
              </button>
            </section>
          ) : (
            <div className="workspace">
              <section className="form-panel">
                {step === 0 && (
                  <>
                    <div className="panel-heading">
                      <h2>Who performed the service?</h2>
                      <p>Select the stylist who served the customer.</p>
                    </div>

                    <div className="staff-grid">
                      {staffMembers.map((member, index) => (
                        <button
                          key={member.id}
                          className={`staff-card ${
                            staff === member.id ? "selected" : ""
                          }`}
                          onClick={() => setStaff(member.id)}
                        >
                          <div className={`staff-avatar avatar-${index}`}>
                            {member.name.charAt(0)}
                          </div>
                          <div className="staff-info">
                            <h3>{member.name}</h3>
                            <p>{member.role}</p>
                          </div>
                          <span className="selection-circle">
                            {staff === member.id ? "✓" : ""}
                          </span>
                        </button>
                      ))}
                    </div>
                    <p className="helper-text">
                      Staff names are placeholders. Replace them with your salon team.
                    </p>
                  </>
                )}

                {step === 1 && (
                  <>
                    <div className="panel-heading">
                      <h2>Customer details</h2>
                      <p>Enter the details for this salon visit.</p>
                    </div>

                    <div className="form-fields">
                      <label>
                        Customer name <span>*</span>
                        <input
                          name="name"
                          value={customer.name}
                          onChange={updateCustomer}
                          placeholder="Enter customer's full name"
                          autoFocus
                        />
                      </label>
                      <label>
                        Phone number <span>*</span>
                        <input
                          name="phone"
                          type="tel"
                          value={customer.phone}
                          onChange={updateCustomer}
                          placeholder="Enter phone number"
                        />
                      </label>
                      <label>
                        Email address <small>(optional)</small>
                        <input
                          name="email"
                          type="email"
                          value={customer.email}
                          onChange={updateCustomer}
                          placeholder="Enter email address"
                        />
                      </label>
                    </div>
                    <p className="helper-text">
                      Customer details stay in this page's state and are not
                      persisted. Database saving will be added later.
                    </p>
                  </>
                )}

                {step === 2 && (
                  <>
                    <div className="panel-heading">
                      <h2>Which services were performed?</h2>
                      <p>Select all services included in this visit.</p>
                    </div>

                    <div className="service-toolbar">
                      <input
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        placeholder="Search services..."
                        aria-label="Search services"
                      />
                      <span>{selectedServices.length} selected</span>
                    </div>

                    <div className="category-tabs">
                      {["All", ...serviceGroups.map((group) => group.name)].map(
                        (category) => (
                          <button
                            key={category}
                            className={activeCategory === category ? "category-tab active" : "category-tab"}
                            onClick={() => setActiveCategory(category)}
                          >
                            {category}
                          </button>
                        )
                      )}
                    </div>

                    <div className="service-list">
                      {filteredServices.map((service) => {
                        const selected = selectedServices.includes(service.name);

                        return (
                          <button
                            key={service.name}
                            className={`service-row ${selected ? "selected" : ""}`}
                            onClick={() => toggleService(service.name)}
                          >
                            <span className="service-checkbox">
                              {selected ? "✓" : ""}
                            </span>
                            <span className="service-info">
                              <strong>{service.name}</strong>
                              <small>{service.category}</small>
                            </span>
                            <strong className="service-price">
                              ₹{service.price.toLocaleString("en-IN")}
                            </strong>
                          </button>
                        );
                      })}

                      {filteredServices.length === 0 && (
                        <div className="empty-state">
                          No services match your search.
                        </div>
                      )}
                    </div>
                    <p className="helper-text">
                      Prices are editable starter data based on the supplied
                      printed menu. Confirm all rates before using this for billing.
                    </p>
                  </>
                )}

                {step === 3 && (
                  <>
                    <div className="panel-heading">
                      <h2>How was the customer's experience?</h2>
                      <p>Record the customer's feedback honestly.</p>
                    </div>

                    <div className="rating-section">
                      <p>Overall service rating <span>*</span></p>
                      <div className="star-picker" onMouseLeave={() => setHoverRating(0)}>
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            className={`star-button ${
                              star <= (hoverRating || rating) ? "filled" : ""
                            }`}
                            onMouseEnter={() => setHoverRating(star)}
                            onClick={() => setRating(star)}
                            aria-label={`${star} star${star > 1 ? "s" : ""}`}
                          >
                            ★
                          </button>
                        ))}
                      </div>
                      <p className="rating-caption">
                        {rating === 0
                          ? "Select a rating"
                          : ["", "Poor", "Fair", "Good", "Very good", "Excellent"][rating]}
                      </p>
                    </div>

                    <label className="comment-label">
                      Written feedback <small>(optional)</small>
                      <textarea
                        value={comment}
                        onChange={(event) => setComment(event.target.value)}
                        placeholder="What did the customer say about the service?"
                        rows={5}
                        maxLength={1000}
                      />
                      <small className="character-count">
                        {comment.length}/1000 characters
                      </small>
                    </label>
                  </>
                )}

                <div className="form-footer">
                  <button
                    className="secondary-button"
                    disabled={step === 0}
                    onClick={() => setStep((current) => current - 1)}
                  >
                    ← Back
                  </button>

                  {step < 3 ? (
                    <button
                      className="primary-button"
                      disabled={!canContinue()}
                      onClick={() => setStep((current) => current + 1)}
                    >
                      Continue <span>→</span>
                    </button>
                  ) : (
                    <button
                      className="primary-button"
                      disabled={!canContinue()}
                      onClick={finishReview}
                    >
                      Review summary <span>→</span>
                    </button>
                  )}
                </div>
              </section>

              <aside className="summary-panel">
                <div className="summary-title">
                  <h2>Visit summary</h2>
                  <span>✳</span>
                </div>

                <div className="summary-divider" />

                <SummaryRow label="Date" value={new Date().toLocaleDateString("en-IN")} />
                <SummaryRow label="Staff member" value={staffMembers.find((s) => s.id === staff)?.name || "Not selected"} />
                <SummaryRow label="Customer" value={customer.name || "Not entered"} />
                <SummaryRow label="Phone" value={customer.phone || "Not entered"} />
                <SummaryRow label="Services" value={`${selectedServices.length} selected`} />
                <SummaryRow label="Rating" value={rating ? `${rating} / 5 stars` : "Not rated"} />

                {selectedServices.length > 0 && (
                  <div className="summary-services">
                    {selectedServices.map((name) => {
                      const service = allServices.find((item) => item.name === name);
                      return (
                        <div className="summary-service" key={name}>
                          <span>{name}</span>
                          <strong>₹{service?.price.toLocaleString("en-IN")}</strong>
                        </div>
                      );
                    })}
                  </div>
                )}

                <div className="summary-divider" />
                <div className="summary-total">
                  <span>Estimated total</span>
                  <strong>₹{total.toLocaleString("en-IN")}</strong>
                </div>
                <p className="summary-note">
                  <span>✧</span> Every visit tells a story.
                </p>
              </aside>
            </div>
          )}

          <footer className="page-footer">
            <span>© D Spring Unisex Salon</span>
            <span>Beauty · People · Growth</span>
          </footer>
        </div>
      </main>
    </div>
  );
}

function SummaryRow({ label, value }) {
  return (
    <div className="summary-row">
      <span>{label}</span>
      <strong title={value}>{value}</strong>
    </div>
  );
}

export default App;
