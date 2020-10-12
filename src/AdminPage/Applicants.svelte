<script>
  export let applicants;
  let confirm = false;
  let deleteEmail;
  let error;

  const deleteReading = async function() {
    confirm = true;
  };

  function closeModal() {
    confirm = false;
    error = "";
    deleteEmail = {};
  }

  const removeItem = function() {
    fetch("http://localhost:3000/admin/applications/" + deleteEmail._id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.status) window.location.href = window.location.href;
        error =
          "The Data you entered could not be deleted. Please try again later.";
      })
      .catch(err => console.log(err));
  };
</script>

<style>
  .rvp-overflow-hidden {
    overflow-x: scroll;
  }
  .rvp-scroll-table {
    min-width: 1920px;
  }
  .rvp-delete {
    cursor: pointer;
  }
  .rvp-result-modal {
    position: fixed;
    display: flex;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 0%;
    height: 0%;
    z-index: 999;
  }
  .rvp-result-expand {
    width: 100%;
    height: 100%;
  }
  .rvp-modal-background {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.418);
    z-index: 0 !important;
  }
  .rvp-modal-body {
    width: 400px;
    max-width: 95%;
    margin: 0 2.5%;
    background-color: var(--white);
    padding: 16px;
    z-index: 1 !important;
  }
  .rvp-modal-body button {
    border-style: none;
    background-color: var(--deep-blue);
    color: var(--white);
    padding: 8px 16px;
    text-transform: uppercase;
    font-family: Helvetica;
    letter-spacing: 2px;
  }
  .rvp-modal-heading {
    color: var(--orange);
    font-family: Robota;
    text-transform: uppercase;
    margin: 0px 8px 8px 8px;
  }
  .rvp-modal-para {
    font-family: Helvetica;
    margin: 0px 8px 8px 8px;
  }
  .rvp-confirm {
    background-color: var(--orange) !important;
    color: var(--white) !important;
  }
</style>

<div class="container-fluid rvp-overflow-hidden">
  <table class="table table-striped rvp-scroll-table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Father</th>
        <th scope="col">Email</th>
        <th scope="col">Phone</th>
        <th scope="col">College</th>
        <th scope="col">Branch</th>
        <th scope="col">Year</th>
        <th scope="col">Remove</th>
      </tr>
    </thead>
    <tbody>
      {#each applicants as applicant, i}
        <tr>
          <th scope="row">{i + 1}</th>
          <td>{applicant.fname}</td>
          <td>{applicant.lname}</td>
          <td>{applicant.father}</td>
          <td>{applicant.email}</td>
          <td>{applicant.phone}</td>
          <td>{applicant.college}</td>
          <td>{applicant.branch}</td>
          <td>{applicant.year}</td>
          <td>
            <svg
              on:click={() => {
                deleteEmail = applicant;
                deleteReading();
              }}
              height="20px"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="trash-alt"
              class="svg-inline--fa fa-trash-alt fa-w-14 rvp-delete"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512">
              <path
                fill="currentColor"
                d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0
                48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96
                0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32
                0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1
                0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0
                48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0
                0-16-16z" />
            </svg>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<div
  class={confirm ? 'rvp-result-modal rvp-result-expand' : 'rvp-result-modal'}>
  <div class="rvp-modal-background" on:click={closeModal} />
  <div class="rvp-modal-body text-center">
    {#if !error}
      <h3 class="rvp-modal-heading text-left">Confirm Action</h3>
      <p class="rvp-modal-para text-left">
        Are you sure you wish to remove this applicant?
        {#if deleteEmail}
          <br />
          <br />
          name: {deleteEmail.fname} {deleteEmail.lname}
          <br />
          email: {deleteEmail.email}
        {/if}
        <br />
        <br />
        Once removed, it cannot be retrieved back.
      </p>
      <button class="rvp-confirm" on:click={removeItem}>Confirm</button>
      <button on:click={closeModal}>Close</button>
    {:else}
      <h3 class="rvp-modal-heading text-left">Request Status</h3>
      <p class="rvp-modal-para text-left">{error}</p>
      <button on:click={closeModal}>Close</button>
    {/if}
  </div>
</div>
