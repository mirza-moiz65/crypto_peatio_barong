Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '*' # You can add your own origin url here from which APIs will be hit

    resource '*',
             headers: :any,
             methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end