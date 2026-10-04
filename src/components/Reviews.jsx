import { REVIEWS } from '../data/siteContent';

/** Reseñas de lectores. */
function Reviews() {
  return (
    <section id="resenas">
      <div className="container">
        <p className="eyebrow text-center">Lo que dicen nuestros lectores</p>
        <h2 className="text-center mb-5">Reseñas</h2>
        <div className="row g-4">
          {REVIEWS.map((review) => (
            <div className="col-md-4" key={review.id}>
              <blockquote className="review-card p-4 h-100 mb-0">
                <p>"{review.text}"</p>
                <cite>— {review.author}</cite>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
