local nui = false

RegisterCommand('nui', function()
  nui = not nui
  SetNuiFocus(nui,nui)
  SendNUIMessage({
    type = "toggle",
    value = nui,
  })
end)