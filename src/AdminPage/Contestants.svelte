<script>
  export let contestants;
  let confirm = false;
  let team;
  let members;
  let error;
  let view = false;
  const __participants = 3;

  const deleteTeam = async function() {
    confirm = true;
  };

  function closeModal() {
    confirm = false;
    view = false;
    error = "";
    team = false;
  }

  const viewTeam = function() {
    view = true;
  };

  const removeItem = function() {
    fetch("http://localhost:3000/admin/robospridh/" + team._id, {
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
    margin-right: 16px;
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
    min-width: 400px;
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
  .rvp-team-modal {
    max-height: 80vh;
    overflow-y: scroll;
  }
  .rvp-team-overflowbox {
    min-height: fit-content;
  }
  .rvp-leader {
    color: var(--deep-blue);
  }
  .card-group {
    margin: 16px 16px;
  }
  .card {
    min-width: 300px;
  }
  .card-title {
    text-transform: uppercase;
    font-family: Helvetica;
  }
  .card-text {
    font-family: Helvetica;
    list-style-type: none;
    padding: 0;
  }
  .rvp-download-id-proof {
    font-family: Helvetica;
    color: var(--orange) !important;
  }
</style>

<div class="container-fluid rvp-overflow-hidden">
  <table class="table table-striped rvp-scroll-table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Leader</th>
        <th scope="col">Email</th>
        <th scope="col">College</th>
        <th scope="col">Branch</th>
        <th scope="col">Phone</th>
        <th scope="col">Year</th>
        <th scope="col">Options</th>
      </tr>
    </thead>
    <tbody>
      {#each contestants as contestant, i}
        <tr>
          <th scope="row">{i + 1}</th>
          <td>{contestant.member[0]}</td>
          <td>{contestant.email[0]}</td>
          <td>{contestant.college[0]}</td>
          <td>{contestant.branch[0]}</td>
          <td>{contestant.phone[0]}</td>
          <td>{contestant.year[0]}</td>
          <td>
            <svg
              on:click={() => {
                members = contestant;
                viewTeam();
              }}
              height="20px"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="eye"
              class="svg-inline--fa fa-eye fa-w-18 rvp-delete"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512">
              <path
                fill="currentColor"
                d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64
                3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448
                288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0
                0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144
                144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9
                66.9A95.78 95.78 0 1 0 288 160z" />
            </svg>
            <svg
              on:click={() => {
                team = contestant;
                deleteTeam();
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
        Are you sure you wish to remove this team?
        {#if team}
          <br />
          <br />
          Leader: {team.member[0]}
          <br />
          email: {team.email[0]}
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

<div class={view ? 'rvp-result-modal rvp-result-expand' : 'rvp-result-modal'}>
  <div class="rvp-modal-background" on:click={closeModal} />
  <div class="rvp-modal-body rvp-team-modal text-center">
    <div class="rvp-team-overflowbox">
      {#if members}
        <h3 class="rvp-modal-heading text-left">
          View team with lead:
          <span class="rvp-leader">{members.member[0]}</span>
        </h3>
        <div class="card-group">
          {#each Array(__participants) as _, i}
            <div class="card">
              <div class="card-body text-left">
                <h5 class="card-title">{members.member[i]}</h5>
                <ul class="card-text">
                  <li>{members.college[i]}</li>
                  <li>{members.branch[i]}</li>
                  <li>{members.email[i]}</li>
                  <li>{members.phone[i]}</li>
                  <li>{members.year[i]}</li>
                </ul>
                <a
                  class="rvp-download-id-proof"
                  href="../uploads/{members.proof[i]}"
                  download>
                  Download college ID
                </a>
              </div>
            </div>
          {/each}
        </div>
        <div class="container-fluid" />
        <button on:click={closeModal}>Close</button>
      {/if}
    </div>
  </div>
</div>
