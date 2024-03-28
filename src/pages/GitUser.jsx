export  const GitUser = ({thief})=>{
    return(
        <div key={thief.id} className="bg-amber-900">
        <h1>Api Array</h1>
        <img src={thief.avatar_url} alt="" className="h-32 w-32" />
        <p className="text-3xl">{thief.login}</p>
        <a
          className="btn bg-red-900"
          href={thief.html_url}
          rel="noreferrer"
          target="_blank"
        >
          Visit my Profile {thief.id}
        </a>
      </div>
    )
}