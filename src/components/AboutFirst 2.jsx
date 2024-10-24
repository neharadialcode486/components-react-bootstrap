import React from 'react';

export const AboutFirst = () => {
  return (
    <section className="min-vh-100  d-flex align-items-center justify-content-center">
      <div className="bg-img">
        <div className="container">
          <h3 className="text-center main-heading fw-semibold mb-3">Lorem ipsum</h3>
          <p className="mx-auto sec-text text-center">
            Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum suspendisse quam. 
            Hac posuere eget nam diam velit urna adipiscing diam. Dis velit nam vitae hendrerit at egestas. 
            Tellus velit turpis at sed lorem vitae sed.
          </p>
          <div className="text-center mt-4 pt-2">
            <button className="pushable rounded-3 border-0 p-0">
              <span className="front rounded-3 d-block text-white">
                Button
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
