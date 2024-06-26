describe('tutor view submissions', () => {
  before(() => {
    cy.tutorLogin('tut11@tutor.com', 'CS3213ITS');
  });

  it('tutor can view submissions', () => {
    cy.contains('Check Questions').click();
    cy.contains('Here you can see ALL questions.');
    cy.contains('button', 'View Question Insight').click();
    cy.contains('You are viewing QUESTION:');
    cy.contains('Total Students');
    cy.contains('Passes');
    cy.contains('Total Submissions');
    cy.contains('button', 'View Student Submissions').click();
    cy.contains('Submissions for Question');
    //   cy.contains('STUDENT EMAIL');
    //   cy.contains('SUBMISSION NUMBER');
    //   cy.contains('SCORE');
    //   cy.contains('SUBMISSION TIME');
  });
});
