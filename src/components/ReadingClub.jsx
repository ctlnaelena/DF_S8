import { CLUB_SESSIONS } from '../data/siteContent';

/** Próximas sesiones del club de lectura. */
function ReadingClub() {
  return (
    <section id="club" className="reading-club">
      <div className="container">
        <h2 className="text-center mb-2">Próximas sesiones del club de lectura</h2>
        <p className="text-center club-intro mx-auto mb-5">
          Nos juntamos a beber algo, sin apuro, a conversar sobre un libro.
        </p>

        <div className="row text-center g-4">
          {CLUB_SESSIONS.map((session) => (
            <div className="col-md-4 timeline-item" key={session.id}>
              <span className="timeline-dot mb-2"></span>
              <p className="timeline-title mb-1">{session.title}</p>
              <p className="timeline-label">{session.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReadingClub;
