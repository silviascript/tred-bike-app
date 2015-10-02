Rails.application.config.middleware.use OmniAuth::Builder do
  provider :twitter, "2xhAP4psbk9yDQjR0ATDeUA7b", "T8ChyLk6K1LG9m40aqdcVtbt18wXsYH5ot1e7Fhw4ae97G437n"
  {
    :secure_image_url => 'true',
    :image_size => 'original',
    :authorize_params => {
      :force_login => 'true',
      :lang => 'pt'
    }
  }
end

# Rails.application.config.middleware.use OmniAuth::Builder do
#   provider :twitter, ENV["twitter_key"], ENV["twitter_secret"]
# end
