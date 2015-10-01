Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, ENV['1712117812350823'], ENV['cc6978a64cce6248927cbd21d3483ae9']
  # scope: 'public_profile', info_fields: 'id,name,link'
end
