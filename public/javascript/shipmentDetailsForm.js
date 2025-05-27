document.addEventListener("DOMContentLoaded", () => {
  const now = new Date()
  const currentDate = now.toISOString().substring(0,10)
  const CurrentTime = now.toISOString().substring(11,16)
  
  document.getElementById("shipmentDate").value = currentDate
  document.getElementById("shipmentTime").value = CurrentTime
})